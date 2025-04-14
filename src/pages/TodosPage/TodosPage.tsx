import { FC, useState } from 'react';
import { Collapse, Tabs } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectGroup } from '../../store/todos/reducers';
import { groupCountSelector, groupsSelector, taskCountSelector } from '../../store/todos/selectors';

import TodosContent from '../../components/TodosContent/TodosContent';

import * as S from './style';

const TodosPage: FC = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const groupCount = useAppSelector(groupCountSelector);
  const taskCount = useAppSelector(taskCountSelector);

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

  const groupTabs = [
    {
      key: '0',
      label: <span>Все</span>,
      children: <TodosContent tabId="0" />,
    },
    ...groups.map(({ id, color, groupTitle }, index) => {
      return {
        key: (index + 1).toString(),
        label: <span style={{ color }}>{groupTitle}</span>,
        children: <TodosContent tabId={id} />,
      };
    }),
  ];

  const handleChangeGroup = (key: string) => dispatch(selectGroup(key));

  return (
    <S.Wrapper>
      {/*** Сайдбар ***/}
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
          {/*** Вкладки ***/}
          <Tabs
            defaultActiveKey="0"
            type="card"
            items={groupTabs}
            destroyInactiveTabPane={true}
            onChange={handleChangeGroup}
          />

          {/*** Добавить вкладку ***/}
          <S.AddGroup
            title="Создать группу"
            onClick={() => {
              console.log('add new group');
            }}
          >
            <PlusOutlined />
          </S.AddGroup>
        </S.TabsWrapper>

        <S.InfoBlock>
          {/* Общее количество групп */}
          <div title="Количество групп">Группы: {groupCount}</div>

          {/* Задач в группе */}
          <div title="Задач в группе">Задачи: {taskCount}</div>

          {/* удалить завершенные */}
          {/*<S.DeleteTasks*/}
          {/*  title="Удалить завершенные"*/}
          {/*  onClick={() => {*/}
          {/*    console.log('Удалить завершенные');*/}
          {/*  }}*/}
          {/*/>*/}
        </S.InfoBlock>
      </S.Content>
    </S.Wrapper>
  );
};

export default TodosPage;
