import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// Store
import { store } from './store/store';
// App
import App from './App';
// Fonts
import './assets/fonts/fonts.css';
// Styles
import 'antd/dist/reset.css';
import './styles/ant-redefine.css';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>
);
