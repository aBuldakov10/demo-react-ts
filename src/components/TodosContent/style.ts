import styled from 'styled-components';
import { Collapse } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons/lib';
import CustomCheck from '../Form/CustomCheck/CustomCheck';
import { theme } from '@/styles/theme';

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

// enable не должен передваться в DOM как boolean, передаваться может только как string.
// enable надо передвать только внутри компонента styled-components, а не в DOM. для этого используется withConfig.
export const EditGroup = styled(EditOutlined).withConfig<{ enable: boolean }>({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    if (prop === 'enable') return false; // Не передавать 'enable' в DOM

    return defaultValidatorFn(prop);
  },
})<{ enable: boolean }>`
  padding: 5px;
  color: ${theme.colors.blue_600};
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};
  opacity: ${({ enable }) => (enable ? '1' : '0')};
  pointer-events: ${({ enable }) => (enable ? 'auto' : 'none')};

  &:hover {
    color: ${theme.colors.second};
    background-color: ${theme.colors.black};
  }
`;

export const DeleteGroup = styled(DeleteOutlined)`
  padding: 5px;
  color: ${theme.colors.red_600};
  border-radius: ${theme.radius_5};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.second};
    background-color: ${theme.colors.black};
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

export const TaskWrapper = styled.div`
  position: relative;
`;

export const TaskDoneCheck = styled(CustomCheck)`
  position: absolute;
  top: 14px;
  left: 16px;
  z-index: 1;
`;

export const TaskAction = styled.div`
  position: absolute;
  top: 9px;
  right: 50px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;

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

export const Task = styled.textarea<{ readOnly: boolean }>`
  display: block;
  padding: 5px 8px;
  width: 100%;
  border-radius: ${theme.radius_5};
  border-color: ${theme.colors.border};
  resize: none;
  outline: none;
  transition: ${theme.transition};
  cursor: ${({ readOnly }) => (readOnly ? 'auto' : 'text')};
  pointer-events: ${({ readOnly }) => (readOnly ? 'none' : '')};

  &:focus {
    border-color: ${({ readOnly }) => (readOnly ? '' : theme.colors.black)};
  }
`;

export const TaskEdited = styled.p`
  margin-top: 5px;
  text-align: right;
`;
