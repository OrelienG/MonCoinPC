import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error("L'élément racine #root est introuvable dans le DOM.");
}

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app);
else createRoot(rootEl).render(app);
