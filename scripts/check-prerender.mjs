import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const titles = new Set();
for (const route of ['', 'services', 'contact', 'legal-notice']) {
  const html = await readFile(`dist/${route ? `${route}/` : ''}index.html`, 'utf8');
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `H1: ${route}`);
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
  assert.ok(html.includes(`href="https://www.moncoinpc.fr/${route}"`));
  assert.ok(!html.includes('name="robots" content="noindex"'));
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title);
  titles.add(title);
  if (route === 'services') {
    assert.equal((html.match(/<article\b/g) ?? []).length, 12);
    assert.ok(html.includes('Diagnostic gratuit si vous faites réaliser'));
  }
  if (route === 'contact') {
    assert.ok(html.includes('<form'));
    assert.match(html, /<form\b[^>]*action="https:\/\/formspree\.io\/f\/mjkylbaq"/);
    assert.match(html, /<form\b[^>]*method="post"/);
  }
}
assert.equal(titles.size, 4);
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok(notFound.includes('name="robots" content="noindex"'));
assert.ok(!notFound.includes('rel="canonical"'));
console.log('Prérendu : contenu, 12 services, formulaire, métadonnées et 404 validés.');
