import { FC } from 'react';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FolderAddOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/common/reducers';
import * as S from './style';

interface TodosActionList {
  onClose: () => void;
}

const TodosActionList: FC<TodosActionList> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    console.log('Добавить задачу');
    onClose();
  };

  const handleAddGroup = () => {
    dispatch(openModal('AddGroupModal'));
    onClose();
  };

  const handleEditGroup = () => {
    console.log('Редактировать группу');
    onClose();
  };

  const handleDeleteGroup = () => {
    console.log('Удалить группу');
    onClose();
  };

  return (
    <div>
      <S.ListItem onClick={handleAddTask}>
        <FileAddOutlined /> Добавить задачу
      </S.ListItem>

      <S.Divider />

      <S.ListItem onClick={handleAddGroup}>
        <FolderAddOutlined /> Добавить группу
      </S.ListItem>

      <S.ListItem onClick={handleEditGroup}>
        <EditOutlined /> Редактировать группу
      </S.ListItem>

      <S.ListItem onClick={handleDeleteGroup}>
        <DeleteOutlined /> Удалить группу
      </S.ListItem>
    </div>
  );
};

export default TodosActionList;
