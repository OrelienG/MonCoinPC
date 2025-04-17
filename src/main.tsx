import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { App } from './App';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
        </>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
