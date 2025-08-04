import { useState } from 'react';
import { CollapseProps, RadioChangeEvent } from 'antd';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/utils/constants';
import * as S from './style';

const useTodosSidebar = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [selectedSort, setSelectedSort] = useState(4);

  const handleChangeFilter = (e: RadioChangeEvent) => setSelectedFilter(e.target.value);
  const handleChangeSort = (e: RadioChangeEvent) => setSelectedSort(e.target.value);

  const sidebarItems: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Фильтр:',
      children: (
        <S.RadioGroup
          options={FILTER_OPTIONS}
          value={selectedFilter}
          onChange={handleChangeFilter}
          direction="vertical"
        />
      ),
    },
    {
      key: '2',
      label: 'Сортировка:',
      children: (
        <S.RadioGroup options={SORT_OPTIONS} value={selectedSort} onChange={handleChangeSort} direction="vertical" />
      ),
    },
  ];

  return { sidebarItems };
};

export default useTodosSidebar;
