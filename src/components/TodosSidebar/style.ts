import styled from 'styled-components';
import CustomRadio from '@/components/Form/CustomRadio/CustomRadio';
import CustomCheck from '@/components/Form/CustomCheck/CustomCheck';
import { theme } from '@/styles/theme';

export const Wrapper = styled.div`
  width: 20%;
  min-width: 230px;

  .ant-collapse .ant-collapse-item:last-child > .ant-collapse-content {
    border-radius: 0px 0px 5px 5px;
  }
`;

export const RadioGroup = styled(CustomRadio)`
  margin-left: 10px;
`;

export const GroupCheck = styled(CustomCheck)`
  padding: 16px;
  border: ${theme.border_1};
  margin-top: 16px;
  border-radius: ${theme.radius_5};
  background: ${theme.colors.white};
`;
