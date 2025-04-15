import { useEffect, useState } from 'react';
import { RadioChangeEvent } from 'antd';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getGroupsThunk } from '@/store/todos/thunks';
import { selectGroup } from '@/store/todos/reducers';
import { groupCountSelector, taskCountSelector } from '@/store/todos/selectors';

const useTodosPage = () => {
  const dispatch = useAppDispatch();
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);

  const [selectedFilter, setSelectedFilter] = useState(1);
  const [selectedSort, setSelectedSort] = useState(4);

  const filterOptions = [
    { label: 'Все', value: 1 },
    { label: 'Активные', value: 2 },
    { label: 'Завершенные', value: 3 },
  ];

  const sortOptions = [
    { label: 'По дате', value: 4 },
    { label: 'Сначала активные', value: 5 },
    { label: 'Сначала завершенные', value: 6 },
  ];

  useEffect(() => {
    dispatch(getGroupsThunk());
  }, []);

  /*** Handlers ***/
  const handleChangeFilter = (e: RadioChangeEvent) => setSelectedFilter(e.target.value);
  const handleChangeSort = (e: RadioChangeEvent) => setSelectedSort(e.target.value);
  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));

  return {
    filterOptions,
    selectedFilter,
    sortOptions,
    selectedSort,
    groupCount,
    taskCount,
    handleChangeFilter,
    handleChangeSort,
    handleChangeGroup,
  };
};

export default useTodosPage;
