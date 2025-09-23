import { useEffect, useState } from 'react';
import type { StatisticTimerProps } from 'antd';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getGroupsThunk, getTasksThunk } from '@/store/todos/thunks';
import { openModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import {
  filteredTasksSelector,
  groupCountSelector,
  isLoadingSelector,
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
  const isLoading = useAppSelector(isLoadingSelector);

  const [actionsOpen, setActionsOpen] = useState(false);
  const [startServer, setStartServer] = useState(false); // запущен сервер или нет
  const [isTimer, setIsTimer] = useState(true); // таймер ожидания ответа от сервера

  useEffect(() => {
    dispatch(getGroupsThunk()); // получение списка групп
    dispatch(getTasksThunk()); // получение списка задач

    // уведомление о запуске сервера при длительной загрузке
    setTimeout(() => {
      if (isLoading) setStartServer(true);
    }, 5000);
  }, []);

  /*** Handlers ***/
  const onChangeTimer: StatisticTimerProps['onChange'] = (val) => {
    if (val && val >= 1000 * 60 * 2) setIsTimer(false); // убрать таймер через 2 мин
  };

  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));

  const handleActionsOpenChange = (state: boolean) => setActionsOpen(state);

  const handleDeleteDone = () => dispatch(openModal('DeleteDoneTasksModal'));

  return {
    isLoading,
    startServer,
    isTimer,

    selectedTab,
    groupTabs: useTodosPageTabs(),
    groupCount,
    actionsOpen,
    taskCount,
    tasksFinished: filteredTasks.filter(({ isDone }) => isDone).length, // количество завершенных задач текущей группы
    isDone: filteredTasks.some(({ isDone }) => isDone),

    onChangeTimer,
    handleChangeGroup,
    handleActionsOpenChange,
    handleDeleteDone,
  };
};

export default useTodosPage;
