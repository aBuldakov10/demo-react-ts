import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div`
  .ant-radio-wrapper {
    align-items: center;

    &:hover .ant-radio-inner {
      border-color: ${theme.colors.main};
    }
  }

  .ant-radio {
    top: 0;
  }

  .ant-radio-inner {
    width: 20px;
    height: 20px;
    border: ${theme.border_2};
  }

  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 3px rgb(36 36 36 / 12%);
    border-color: ${theme.colors.main};
  }

  .ant-radio-checked {
    &:after {
      border-color: ${theme.colors.main};
    }

    .ant-radio-inner {
      border-color: ${theme.colors.main};
      background-color: ${theme.colors.transparent};

      &:after {
        transform: scale(0.7);
        background-color: ${theme.colors.main};
      }
    }
  }

  &.vertical .ant-radio-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &.disabled label {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;
