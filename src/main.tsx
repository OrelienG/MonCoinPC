import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { App } from './App';

import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error("L'élément racine #root est introuvable dans le DOM.");
}

createRoot(rootEl).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
