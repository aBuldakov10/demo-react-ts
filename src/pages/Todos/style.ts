import styled from 'styled-components';
import { theme } from '../../styles/theme';
import CustomRadio from '../../components/Form/CustomRadio/CustomRadio';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Sidebar = styled.div`
  width: 20%;
`;

export const RadioGroup = styled(CustomRadio)`
  margin-left: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 80%;
`;

export const TabsWrapper = styled.div`
  position: relative;

  .ant-tabs-nav {
    width: 90%;
  }
`;

export const AddGroup = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0 0 8px 2px rgba(202, 202, 202, 0.2);
  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background: ${theme.colors.second};
    color: ${theme.colors.text};
  }
`;
