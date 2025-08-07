import { FC } from 'react';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FolderAddOutlined } from '@ant-design/icons';
import useTodosActionList from './useTodosActionList';
import * as S from './style';

interface TodosActionList {
  onClose: () => void;
}

const TodosActionList: FC<TodosActionList> = ({ onClose }) => {
  const { noGroups, handleAddTask, handleAddGroup, handleEditGroup, handleDeleteGroup } = useTodosActionList(onClose);

  return (
    <S.Wrapper>
      <S.ListItem disabled={noGroups} onClick={handleAddTask}>
        <FileAddOutlined /> Добавить задачу
      </S.ListItem>

      <S.Divider />

      <S.ListItem onClick={handleAddGroup}>
        <FolderAddOutlined /> Добавить группу
      </S.ListItem>

      <S.ListItem disabled={noGroups} onClick={handleEditGroup}>
        <EditOutlined /> Редактировать группу
      </S.ListItem>

      <S.ListItem disabled={noGroups} onClick={handleDeleteGroup}>
        <DeleteOutlined /> Удалить группу
      </S.ListItem>
    </S.Wrapper>
  );
};

export default TodosActionList;
