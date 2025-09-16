import { useEffect, useState } from 'react';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getGroupsThunk, getTasksThunk } from '@/store/todos/thunks';
import { openModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import {
  filteredTasksSelector,
  groupCountSelector,
  selectedTabSelector,
  taskCountSelector,
} from '@/store/todos/selectors';
// Hooks
import useTodosPageTabs from './useTodosPageTabs';

const useTodosPage = () => {
  const dispatch = useAppDispatch();
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);
  const selectedTab = useAppSelector(selectedTabSelector);
  const filteredTasks = useAppSelector(filteredTasksSelector);

  const [actionsOpen, setActionsOpen] = useState(false);

  useEffect(() => {
    dispatch(getGroupsThunk()); // получение списка групп
    dispatch(getTasksThunk()); // получение списка задач
  }, []);

  /*** Handlers ***/
  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));

  const handleActionsOpenChange = (state: boolean) => setActionsOpen(state);

  const handleDeleteDone = () => dispatch(openModal('DeleteDoneTasksModal'));

  return {
    selectedTab,
    groupTabs: useTodosPageTabs(),
    groupCount,
    actionsOpen,
    taskCount,
    isDone: filteredTasks.some(({ isDone }) => isDone),
    handleChangeGroup,
    handleActionsOpenChange,
    handleDeleteDone,
  };
};

export default useTodosPage;
