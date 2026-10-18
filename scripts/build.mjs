import { build } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

await build();
await build({ build: { ssr: 'src/entry-server.tsx', outDir: '.prerender', emptyOutDir: true } });
const { render } = await import(pathToFileURL(resolve('.prerender/entry-server.js')));
const template = await readFile('dist/index.html', 'utf8');
const escape = (value = '') =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );
for (const route of ['/', '/services', '/contact', '/legal-notice', '/404']) {
  const { html, metadata } = render(route);
  let page = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(metadata.title)}</title>`);
  page = page.replace(
    /<meta\s+(?:name|property)="(?:description|og:title|og:description|og:url|twitter:title|twitter:description)"[\s\S]*?\/>/g,
    '',
  );
  page = page.replace(/<link rel="canonical"[^>]*>/g, '');
  const tags = [
    ['name', 'description', metadata.description],
    ['property', 'og:title', metadata.title],
    ['property', 'og:description', metadata.description],
    ['property', 'og:url', metadata.canonical],
    ['name', 'twitter:title', metadata.title],
    ['name', 'twitter:description', metadata.description],
  ]
    .filter(([, , value]) => value)
    .map(([attr, name, value]) => `<meta ${attr}="${name}" content="${escape(value)}" />`);
  if (metadata.canonical)
    tags.push(`<link rel="canonical" href="${escape(metadata.canonical)}" />`);
  if (metadata.noIndex) tags.push('<meta name="robots" content="noindex" />');
  page = page.replace('</head>', `${tags.join('\n')}\n</head>`);
  const file =
    route === '/'
      ? 'dist/index.html'
      : route === '/404'
        ? 'dist/404.html'
        : `dist${route}/index.html`;
  await mkdir(resolve(file, '..'), { recursive: true });
  await writeFile(file, page);
  console.log(`Prerendered ${route}`);
}
