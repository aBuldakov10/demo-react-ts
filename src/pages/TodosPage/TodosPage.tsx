import { FC } from 'react';
import { Popover, Tabs } from 'antd';
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
// Components
import Modal from '@/components/Modal/Modal';
import TodosSidebar from '@/components/TodosSidebar/TodosSidebar';
import TodosActionList from '@/components/TodosActionList/TodosActionList';
// Hooks
import useTodosPage from './hooks/useTodosPage';
// Utils
import * as S from './style';

const TodosPage: FC = () => {
  const { groupTabs, groupCount, actionsOpen, taskCount, handleChangeGroup, handleActionsOpenChange } = useTodosPage();

  return (
    <S.Wrapper>
      {/*** Сайдбар ***/}
      <TodosSidebar />

      <S.Content>
        <h1>Список дел</h1>

        <S.TabsWrapper>
          {/*** Вкладки ***/}
          <Tabs
            defaultActiveKey="0"
            type="card"
            items={groupTabs}
            destroyOnHidden={true}
            onChange={handleChangeGroup}
          />

          {/*** Выбрать действие ***/}
          <Popover
            content={<TodosActionList onClose={() => handleActionsOpenChange(false)} />}
            trigger="click"
            open={actionsOpen}
            onOpenChange={handleActionsOpenChange}
            placement="bottomRight"
            destroyOnHidden={true}
            overlayClassName="todos-action"
          >
            <S.Actions title="Выбрать действие">
              <PlusOutlined />
              <CaretDownOutlined />
            </S.Actions>
          </Popover>
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
