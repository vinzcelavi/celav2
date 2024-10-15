import React from 'react';
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { AppProvider } from './contexts/AppContext';

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>,
    options
  );
}
