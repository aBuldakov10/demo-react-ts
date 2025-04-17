import { useEffect, useState } from 'react';
import { RadioChangeEvent } from 'antd';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getGroupsThunk } from '@/store/todos/thunks';
import { openModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import { groupCountSelector, taskCountSelector } from '@/store/todos/selectors';
// Hooks
import useTodosPageTabs from './useTodosPageTabs';

const useTodosPage = () => {
  const dispatch = useAppDispatch();
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);

  const [selectedFilter, setSelectedFilter] = useState(1);
  const [selectedSort, setSelectedSort] = useState(4);

  useEffect(() => {
    dispatch(getGroupsThunk()); // получение списка групп
  }, []);

  /*** Handlers ***/
  const handleChangeFilter = (e: RadioChangeEvent) => setSelectedFilter(e.target.value);
  const handleChangeSort = (e: RadioChangeEvent) => setSelectedSort(e.target.value);
  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));
  const handleAddGroup = () => dispatch(openModal('AddGroupModal'));

  return {
    selectedFilter,
    selectedSort,
    groupTabs: useTodosPageTabs(),
    groupCount,
    taskCount,
    handleChangeFilter,
    handleChangeSort,
    handleChangeGroup,
    handleAddGroup,
  };
};

export default useTodosPage;
