import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons/lib';
import CustomRadio from '../../components/Form/CustomRadio/CustomRadio';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  height: 100%;
`;

export const Sidebar = styled.div`
  position: sticky;
  top: 72px;
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
    width: 92%;
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
  border-radius: ${theme.radius_5};
  background: ${theme.colors.white};
  box-shadow: 0 0 8px 2px rgba(202, 202, 202, 0.2);
  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background: ${theme.colors.second};
    color: ${theme.colors.text};
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 50px;
`;

export const DeleteTasks = styled(DeleteOutlined)`
  padding: 5px;
  color: ${theme.colors.red_600};
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.second};
    background-color: ${theme.colors.black};
  }
`;
