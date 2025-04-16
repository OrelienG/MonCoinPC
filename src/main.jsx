import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
        </>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
