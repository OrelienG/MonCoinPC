import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    {
      name: 'preview-prerendered-routes',
      configurePreviewServer(server) {
        const outputDirectory = resolve(server.config.root, server.config.build.outDir);
        server.middlewares.use((request, response, next) => {
          const url = new URL(request.url ?? '/', 'http://localhost');
          const route = url.pathname.replace(/\/$/, '');
          const alias = url.pathname.match(/^\/(services|contact|legal-notice)\/index\.html$/);
          const canonicalPath =
            url.pathname === '/index.html'
              ? '/'
              : alias
                ? `/${alias[1]}`
                : ['/services/', '/contact/', '/legal-notice/'].includes(url.pathname)
                  ? route
                  : null;
          if (canonicalPath) {
            response.writeHead(301, { Location: `${canonicalPath}${url.search}` });
            response.end();
            return;
          }
          if (url.pathname.startsWith('/api/')) {
            response.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8' });
            response.end(JSON.stringify({ error: 'PHP APIs require the production hosting.' }));
            return;
          }
          const notFound = () => {
            void readFile(resolve(outputDirectory, '404.html'))
              .then((html) => {
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/html; charset=utf-8');
                response.end(request.method === 'HEAD' ? undefined : html);
              })
              .catch(next);
          };
          if (['/services', '/contact', '/legal-notice'].includes(route)) {
            request.url = `${route}/index.html${url.search}`;
            next();
            return;
          }
          if (!route) {
            next();
            return;
          }
          let filePath: string;
          try {
            filePath = resolve(outputDirectory, `.${decodeURIComponent(url.pathname)}`);
          } catch {
            notFound();
            return;
          }
          if (!filePath.startsWith(`${outputDirectory}${sep}`)) {
            notFound();
            return;
          }
          void stat(filePath)
            .then((entry) => (entry.isFile() ? next() : notFound()))
            .catch(notFound);
        });
      },
    },
    !isSsrBuild &&
      Sitemap({
        hostname: 'https://www.moncoinpc.fr',
        dynamicRoutes: ['/services', '/contact', '/legal-notice'],
      }),
  ],
}));
