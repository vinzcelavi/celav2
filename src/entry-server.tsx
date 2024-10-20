import React from 'react';
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import { LocaleProvider } from './contexts/LocaleContext';

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <AppProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </AppProvider>
    </React.StrictMode>,
    options
  );
}
