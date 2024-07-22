import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  background: ${theme.colors.main};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  color: ${theme.colors.clrBg};
`;

export const Menu = styled.div`
  display: flex;
  gap: 15px;
`;
