import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div`
  color: ${theme.colors.text};
`;

export const ListItem = styled.div<{ disabled?: boolean }>`
  margin: 0 6px;
  padding: 6px;
  color: ${({ disabled }) => (disabled ? `${theme.colors.disabled_text}` : '')};
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};

  &:hover {
    background: ${theme.colors.second};
  }

  .anticon {
    margin-right: 8px;
  }
`;

export const Divider = styled.div`
  margin: 6px 0;
  height: 1px;
  background: ${theme.colors.border};
`;
