import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// App
import App from './App';
// Fonts
import './assets/fonts/fonts.css';
// Styles
import { theme } from './styles/theme';
import GlobalStyles from './styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
