import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Wrapper = styled.div<{ checked?: boolean; disabled?: boolean }>`
  label {
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: fit-content;
    color: ${({ disabled }) => (disabled ? theme.colors.disabled_text : theme.colors.text)};
    line-height: 1.2;
    cursor: pointer;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  }

  & input {
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: ${theme.radius_2};
    border: ${theme.border_1};
    background-color: ${({ checked, disabled }) =>
      disabled ? theme.colors.disabled_bg : checked ? theme.colors.main : theme.colors.transparent};
    border-color: ${({ checked, disabled }) => (disabled ? '' : checked ? theme.colors.main : theme.colors.border)};
    transition: ${theme.transition};
    outline: none;
    cursor: pointer;

    &::before {
      content: '';
      transform: rotate(45deg);
      position: absolute;
      top: 0;
      right: 5px;
      width: 8px;
      height: 14px;
      border-bottom: 3px solid ${({ disabled }) => (disabled ? theme.colors.disabled_text : theme.colors.second)};
      border-right: 3px solid ${({ disabled }) => (disabled ? theme.colors.disabled_text : theme.colors.second)};
      opacity: ${({ checked }) => (checked ? 1 : 0)};
      transition: ${theme.transition};
    }
  }
`;
