import { FC } from 'react';
import { Collapse, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// Components
import Modal from '@/components/Modal/Modal';
// Hooks
import useTodosPage from './hooks/useTodosPage';
// Utils
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/utils/constants';
import * as S from './style';

const TodosPage: FC = () => {
  const {
    selectedFilter,
    selectedSort,
    groupTabs,
    groupCount,
    taskCount,
    handleChangeFilter,
    handleChangeSort,
    handleChangeGroup,
    handleAddGroup,
  } = useTodosPage();

  return (
    <S.Wrapper>
      {/*** Сайдбар ***/}
      <S.Sidebar>
        <Collapse defaultActiveKey={['1', '2']} expandIconPosition="end">
          <Collapse.Panel header="Фильтр:" key="1">
            <S.RadioGroup
              options={FILTER_OPTIONS}
              value={selectedFilter}
              onChange={handleChangeFilter}
              direction="vertical"
            />
          </Collapse.Panel>

          <Collapse.Panel header="Сортировка:" key="2">
            <S.RadioGroup
              options={SORT_OPTIONS}
              value={selectedSort}
              onChange={handleChangeSort}
              direction="vertical"
            />
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
          <S.AddGroup title="Создать группу" onClick={handleAddGroup}>
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

      {/*** Модалка ***/}
      <Modal />
    </S.Wrapper>
  );
};

export default TodosPage;
