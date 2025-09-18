import { CollapseProps, RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFilterTask, setSortTask, groupTasks } from '@/store/todos/reducers';
import { filteredSelector, groupedTasksSelector, selectedTabSelector, sortedSelector } from '@/store/todos/selectors';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/utils/constants';
import * as S from './style';

const useTodosSidebar = () => {
  const dispatch = useAppDispatch();
  const filtered = useAppSelector(filteredSelector);
  const sorted = useAppSelector(sortedSelector);
  const selectedTab = useAppSelector(selectedTabSelector);
  const groupedTasks = useAppSelector(groupedTasksSelector);

  // добавить disabled для сортировки завершенных при выборе фильтра активных или завершенных
  const SORT_OPTIONS_MAPPED = SORT_OPTIONS.map((item) => {
    if ((item.value === 'active' || item.value === 'done') && filtered !== 'all') {
      return { ...item, disabled: true };
    }

    return item;
  });

  const handleChangeFilter = (e: RadioChangeEvent) => dispatch(setFilterTask(e.target.value));
  const handleChangeSort = (e: RadioChangeEvent) => dispatch(setSortTask(e.target.value));

  const sidebarItems: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Фильтр:',
      children: (
        <S.RadioGroup options={FILTER_OPTIONS} value={filtered} onChange={handleChangeFilter} direction="vertical" />
      ),
    },
    {
      key: '2',
      label: 'Сортировка:',
      children: (
        <S.RadioGroup options={SORT_OPTIONS_MAPPED} value={sorted} onChange={handleChangeSort} direction="vertical" />
      ),
    },
  ];

  const handleGroupTasks = (state: boolean) => dispatch(groupTasks(state));

  return { sidebarItems, selectedTab, groupedTasks, handleGroupTasks };
};

export default useTodosSidebar;
