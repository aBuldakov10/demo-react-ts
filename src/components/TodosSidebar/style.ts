import styled from 'styled-components';
import CustomRadio from '@/components/Form/CustomRadio/CustomRadio';

export const Wrapper = styled.div`
  position: sticky;
  top: 72px;
  width: 20%;
  min-width: 230px;

  .ant-collapse .ant-collapse-item:last-child > .ant-collapse-content {
    border-radius: 0px 0px 5px 5px;
  }
`;

export const RadioGroup = styled(CustomRadio)`
  margin-left: 10px;
`;
