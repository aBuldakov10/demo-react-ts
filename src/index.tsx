import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// App
import App from './App';
// Fonts
import './assets/fonts/fonts.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
