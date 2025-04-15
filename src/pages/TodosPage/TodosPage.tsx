import { FC } from 'react';
import { Collapse, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useAppSelector } from '@/store/hooks';
import { groupsSelector } from '@/store/todos/selectors';

import useTodosPage from './useTodosPage';
import TodosContent from '@/components/TodosContent/TodosContent';

import * as S from './style';

const TodosPage: FC = () => {
  const groups = useAppSelector(groupsSelector);

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

  const {
    filterOptions,
    selectedFilter,
    sortOptions,
    selectedSort,
    groupCount,
    taskCount,
    handleChangeFilter,
    handleChangeSort,
    handleChangeGroup,
  } = useTodosPage();

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
