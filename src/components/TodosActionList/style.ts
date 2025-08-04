import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const ListItem = styled.div`
  margin: 0 6px;
  padding: 6px;
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};
  cursor: pointer;

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
