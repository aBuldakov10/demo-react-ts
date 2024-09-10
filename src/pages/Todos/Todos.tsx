import { FC, useEffect, useState } from 'react';
import { Collapse, Tabs } from 'antd';
import * as S from './style';

import type { RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getGroups } from '../../store/todos/reducers';
import { getGroupsSelector } from '../../store/todos/selectors';

import { groups } from './fakeApi';
import { PlusOutlined } from '@ant-design/icons';
import TodosContent from '../../components/TodosContent/TodosContent';

interface GroupItem {
  id: string;
  groupTitle: string;
  color: string;
}

const Todos: FC = () => {
  const dispatch = useAppDispatch();
  const Groups = useAppSelector(getGroupsSelector);

  console.log(Groups, 'Groups');

  const [groupsList, setGroupsList] = useState<any>([]);

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

  useEffect(() => {
    dispatch(getGroups('group 1'));

    const gList = groups.map((item: GroupItem, index) => {
      return {
        label: <span style={{ color: item.color }}>{item.groupTitle}</span>,
        key: index + 1,
        children: <TodosContent id={item.id} />,
      };
    });

    setGroupsList([
      {
        label: <span style={{ color: '#222' }}>Все</span>,
        key: '0',
        children: <TodosContent id="0" />,
      },
      ...gList,
    ]);
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
        <h1>Список дел</h1>

        <S.TabsWrapper>
          <Tabs defaultActiveKey="0" type="card" items={groupsList} destroyInactiveTabPane={true} />

          <S.AddGroup onClick={() => {}}>
            <PlusOutlined />
          </S.AddGroup>
        </S.TabsWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Todos;
