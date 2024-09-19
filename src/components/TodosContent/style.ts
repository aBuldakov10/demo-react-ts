import styled from 'styled-components';
import { Collapse } from 'antd';
import { DeleteOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons/lib';
import { theme } from '../../styles/theme';
import CustomCheck from '../Form/CustomCheck/CustomCheck';

export const Wrapper = styled.div`
  padding-top: 10px;
`;

export const TodosItem = styled.div`
  margin-bottom: 10px;
  padding: 0 10px 10px;
  border-bottom: ${theme.border_1};
`;

export const TodosHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const GroupName = styled.h4<{ clr?: string }>`
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ clr }) => (clr ? clr : '')};
`;

export const GroupNoneTasks = styled.span`
  font-size: 12px;
  line-height: 1;
`;

export const GroupAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AddTask = styled(FileAddOutlined)`
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.green_600};
  }
`;

export const EditGroup = styled(EditOutlined)`
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.blue_600};
  }
`;

export const DeleteGroup = styled(DeleteOutlined)`
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.red_600};
  }
`;

export const Accordion = styled(Collapse)`
  position: relative;
  border-radius: ${theme.radius_5};
  background-color: ${theme.colors.white};

  .ant-collapse-header-text {
    padding-right: 275px;
    padding-left: 50px;
  }
`;

export const TaskDoneCheck = styled(CustomCheck)`
  position: absolute;
  top: 14px;
  left: 16px;
  z-index: 1;
`;

export const TaskAction = styled.div`
  position: absolute;
  top: 14px;
  right: 60px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TaskActionDate = styled.div`
  margin-right: 50px;
  font-size: 12px;
  line-height: 1;
`;
