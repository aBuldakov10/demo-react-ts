import styled from 'styled-components';
import CustomRadio from '@/components/Form/CustomRadio/CustomRadio';
import CustomCheck from '@/components/Form/CustomCheck/CustomCheck';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: flex-start;
  border-right: ${theme.border_1};
  margin-left: ${({ isOpen }) => (isOpen ? '-230px' : '')};
  transition: ${theme.transition};

  .ant-collapse .ant-collapse-item:last-child > .ant-collapse-content {
    border-radius: 0px 0px 5px 5px;
  }
`;

export const SideMenuWrapper = styled.div`
  min-width: 230px;
`;

export const RadioGroup = styled(CustomRadio)`
  margin-left: 10px;
`;

export const GroupCheck = styled(CustomCheck)`
  margin-top: 16px;
  padding: 16px;
  border: ${theme.border_1};
  border-radius: ${theme.radius_5};
  background: ${theme.colors.white};
`;

export const SideMenuBtn = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  transition: ${theme.transition};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
  cursor: pointer;
`;
