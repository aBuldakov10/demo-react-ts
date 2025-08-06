import styled from 'styled-components';
import { ColorPicker, Select } from 'antd';
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

export const Title = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const SelectGroup = styled(Select)`
  width: 100%;
  height: 42px;

  .ant-select-selector,
  .ant-select-arrow {
    transition: ${theme.transition};
  }

  &:not(.ant-select-customize-input) .ant-select-selector {
    border: ${theme.border_1};
  }

  .ant-select-selector {
    border-radius: ${theme.radius_5};
  }

  &.ant-select-focused:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) {
    .ant-select-selector {
      border-color: ${theme.colors.main};
      box-shadow: none;
    }

    .ant-select-arrow {
      transform: rotate(180deg);
      color: ${theme.colors.main};
    }
  }

  @media ${theme.breakpoints.hover} {
    &:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover {
      .ant-select-selector {
        border-color: ${theme.colors.main};
      }

      .ant-select-arrow {
        color: ${theme.colors.main};
      }
    }
  }
`;

export const OptionLabel = styled.span<{ clr: string }>`
  color: ${({ clr }) => clr};
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const Input = styled.input<{ isError: boolean }>`
  padding: 5px 15px;
  width: 100%;
  height: 42px;
  border: ${theme.border_1};
  border-color: ${({ isError }) => (isError ? `${theme.colors.red_600}` : '')};
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};
  outline: none;

  &:focus {
    border-color: ${({ isError }) => (isError ? `${theme.colors.red_600}` : `${theme.colors.main}`)};
  }

  @media ${theme.breakpoints.hover} {
    &:hover {
      border-color: ${({ isError }) => (isError ? `${theme.colors.red_600}` : `${theme.colors.main}`)};
    }
  }
`;

export const Error = styled.span`
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 12px;
  color: ${theme.colors.red_600};
`;

export const Color = styled(ColorPicker)<{ clr: string; w: string }>`
  justify-content: flex-start;
  padding: 4px;
  border-color: ${theme.colors.border};
  transition: border-color ${theme.transition};

  &.ant-color-picker-trigger {
    min-width: ${({ w }) => w};
    border-radius: ${theme.radius_5};

    .ant-color-picker-color-block {
      border-radius: ${theme.radius_5};
    }

    .ant-color-picker-color-block-inner {
      border: ${theme.border_1};
      box-shadow: none;
    }
  }

  &.ant-color-picker-trigger-active {
    box-shadow: none;
    border-color: ${({ clr }) => clr};
  }

  @media ${theme.breakpoints.hover} {
    &:hover {
      border-color: ${({ clr }) => clr};
    }
  }
`;

export const Submit = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px 15px;
  width: 120px;
  color: ${theme.colors.second};
  background: ${theme.colors.main};
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
