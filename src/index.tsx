import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/ui';
import { ColorModeContextProvider } from './shared/providers/ColorModeProvider/ColorModeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>
);