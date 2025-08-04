import { useEffect } from 'react';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { getGroupsThunk } from '@/store/todos/thunks';
import { openModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import { groupCountSelector, taskCountSelector } from '@/store/todos/selectors';
// Hooks
import useTodosPageTabs from './useTodosPageTabs';

const useTodosPage = () => {
  const dispatch = useAppDispatch();
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);

  useEffect(() => {
    // dispatch(getGroupsThunk()); // получение списка групп
  }, []);

  /*** Handlers ***/
  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));
  const handleAddGroup = () => dispatch(openModal('AddGroupModal'));

  return {
    groupTabs: useTodosPageTabs(),
    groupCount,
    taskCount,
    handleChangeGroup,
    handleAddGroup,
  };
};

export default useTodosPage;
