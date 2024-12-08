import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from "@material-tailwind/react";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <App />
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
