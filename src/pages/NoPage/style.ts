import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

export const Code = styled.p`
  font-family: monospace;
  font-size: 200px;
  font-weight: 600;
  text-shadow: 4px 4px 0px ${theme.colors.main};
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
