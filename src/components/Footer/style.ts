import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Footer = styled.footer`
  padding: 30px 0;
  color: ${theme.colors.text_bg};
  text-align: center;
  background: ${theme.colors.main};

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
