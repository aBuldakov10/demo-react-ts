import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  font-family: 'Montserrat', sans-serif;
  color: ${theme.colors.text};
  background: ${theme.colors.bg};
}

::selection {
    background: ${theme.colors.second};
}

html,
body,
#root,
.container {
  height: 100%;
}

h1 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}

p:last-child {
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: inherit;
  transition: ${theme.transition};
  
  &:hover {
    color: ${theme.colors.second};
  }
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  max-width: 1400px;
  width: 100%;
}
`;
