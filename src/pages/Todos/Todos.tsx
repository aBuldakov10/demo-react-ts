import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import * as S from './style';

import type { RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getGroups } from '../../store/todos/reducers';
import { getGroupsSelector } from '../../store/todos/selectors';

const Todos: FC = () => {
  const dispatch = useAppDispatch();
  const Groups = useAppSelector(getGroupsSelector);

  const [selectedFilter, setSelectedFilter] = useState(1);
  const [selectedSort, setSelectedSort] = useState(4);

  const handleChangeFilter = (e: RadioChangeEvent) => setSelectedFilter(e.target.value);
  const handleChangeSort = (e: RadioChangeEvent) => setSelectedSort(e.target.value);

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

  console.log('1');

  useEffect(() => {
    dispatch(getGroups('group 1'));
  }, []);

  return (
    <S.Wrapper>
      <S.Sidebar>
        <Collapse defaultActiveKey={['1', '2']} expandIconPosition="end">
          <Collapse.Panel header="Фильтр:" key="1">
            <S.RadioGroup
              options={filterOptions}
              value={selectedFilter}
              onChange={handleChangeFilter}
              direction="vertical"
            />
          </Collapse.Panel>

          <Collapse.Panel header="Сортировка:" key="2">
            <S.RadioGroup options={sortOptions} value={selectedSort} onChange={handleChangeSort} direction="vertical" />
          </Collapse.Panel>
        </Collapse>
      </S.Sidebar>

      <S.Content>
        <S.ContentHeading>
          <S.GroupNav>
            <div>все</div>
            <div>group 1</div>
            <div>group 2</div>

            {Groups.length && Groups.map((item) => <div>{item}</div>)}
          </S.GroupNav>

          <div>+ Новая группа</div>
        </S.ContentHeading>

        <div>body со списком групп и задач</div>
      </S.Content>
    </S.Wrapper>
  );
};

export default Todos;
