import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  font-family: 'Montserrat';
  background: ${theme.colors.bg};
}

html,
body,
#root,
.container {
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  transition: ${theme.transition};
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  max-width: 1400px;
  width: 100%;
}
`;
