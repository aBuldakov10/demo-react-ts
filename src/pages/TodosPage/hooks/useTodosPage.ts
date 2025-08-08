import { useEffect, useState } from 'react';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getGroupsThunk, getTasksThunk } from '@/store/todos/thunks';
import { selectGroup } from '@/store/todos/reducers';
import { groupCountSelector, taskCountSelector } from '@/store/todos/selectors';
// Hooks
import useTodosPageTabs from './useTodosPageTabs';

const useTodosPage = () => {
  const dispatch = useAppDispatch();
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);

  const [actionsOpen, setActionsOpen] = useState(false);

  useEffect(() => {
    dispatch(getGroupsThunk()); // получение списка групп
    dispatch(getTasksThunk()); // получение списка задач
  }, []);

  /*** Handlers ***/
  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));

  const handleActionsOpenChange = (state: boolean) => {
    setActionsOpen(state);
  };

  return {
    groupTabs: useTodosPageTabs(),
    groupCount,
    actionsOpen,
    taskCount,
    handleChangeGroup,
    handleActionsOpenChange,
  };
};

export default useTodosPage;
