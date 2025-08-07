import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/common/reducers';
import { groupsSelector } from '@/store/todos/selectors';

const useTodosActionList = (onClose: () => void) => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);

  const handleAddTask = () => {
    console.log('Добавить задачу');
    onClose();
  };

  const handleAddGroup = () => {
    dispatch(openModal('AddGroupModal'));
    onClose();
  };

  const handleEditGroup = () => {
    dispatch(openModal('EditGroupModal'));
    onClose();
  };

  const handleDeleteGroup = () => {
    dispatch(openModal('DeleteGroupModal'));
    onClose();
  };

  return { noGroups: !groups.length, handleAddTask, handleAddGroup, handleEditGroup, handleDeleteGroup };
};

export default useTodosActionList;
