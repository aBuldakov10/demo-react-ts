import styled from 'styled-components';
import { Select } from 'antd';
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

  .ant-select-selector {
    transition: ${theme.transition};
  }

  &:not(.ant-select-customize-input) .ant-select-selector {
    border: ${theme.border_1};
  }

  .ant-select-selector {
    border-radius: ${theme.radius_5};

    .ant-select-selection-wrap {
      min-height: 38px;
    }
  }

  &.ant-select-focused:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) {
    .ant-select-selector {
      border-color: ${theme.colors.main};
      box-shadow: none;
    }

    .ant-select-arrow {
      color: ${theme.colors.main};
    }
  }

  &.ant-select-multiple .ant-select-selection-item {
    align-items: center;
    min-height: 32px;
    background: ${theme.colors.second};
    border-radius: ${theme.radius_5};

    .ant-select-selection-item-content {
      margin-right: 8px;

      span {
        color: ${theme.colors.text};
      }
    }

    .ant-select-selection-item-remove {
      color: ${theme.colors.white};
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
