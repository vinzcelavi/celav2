import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import { LocaleProvider } from './contexts/LocaleContext';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <AppProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </AppProvider>
  </React.StrictMode>
);
