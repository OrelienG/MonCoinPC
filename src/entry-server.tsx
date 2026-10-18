import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from './App';
import { MetadataContext, type Metadata } from './lib/metadata';

export function render(url: string) {
  const metadata: Metadata = {};
  const html = renderToString(
    <MetadataContext.Provider value={metadata}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </MetadataContext.Provider>,
  );
  return { html, metadata };
}
