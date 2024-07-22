import { theme } from '../styles/theme';

type ColorsType = keyof typeof theme.colors;

export interface ThemeType {
  colors: {
    [color in ColorsType]: string;
  };
}
