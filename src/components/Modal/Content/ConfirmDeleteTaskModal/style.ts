import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div`
  padding-top: 8px;
  width: 400px;
  color: ${theme.colors.text};
`;

export const FormGroup = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Warning = styled.p`
  line-height: 1.2;

  span {
    color: ${theme.colors.red_600};
    font-weight: 600;
  }
`;

export const Submit = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px 15px;
  width: 120px;
  color: ${theme.colors.white};
  background: ${theme.colors.red_600};
  border: 0;
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};
  cursor: pointer;

  @media ${theme.breakpoints.hover} {
    &:hover {
      color: ${theme.colors.main};
      background: ${theme.colors.second};
    }
  }
`;
