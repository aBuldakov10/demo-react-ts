import { FC } from 'react';
import { Statistic, Spin, Popover, Tabs } from 'antd';
import { LoadingOutlined, CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
// Components
import Modal from '@/components/Modal/Modal';
import TodosSidebar from '@/components/TodosSidebar/TodosSidebar';
import TodosActionList from '@/components/TodosActionList/TodosActionList';
// Hooks
import useTodosPage from './hooks/useTodosPage';
// Utils
import * as S from './style';

const { Timer } = Statistic;
const before = Date.now();

const TodosPage: FC = () => {
  const {
    isLoading,
    startServer,
    isTimer,

    selectedTab,
    groupTabs,
    groupCount,
    actionsOpen,
    taskCount,
    tasksFinished,
    isDone,

    onChangeTimer,
    handleChangeGroup,
    handleActionsOpenChange,
    handleDeleteDone,
  } = useTodosPage();

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.LoadingWrap>
          <Spin indicator={<LoadingOutlined spin />} size="large" />

          {startServer && (
            <>
              <span>Дождитесь запуска сервера. Этот процесс занимает до 2 минут</span>

              {isTimer && (
                <S.TimerWrap>
                  <span>Ожидание:</span>
                  <Timer type="countup" value={before} onChange={onChangeTimer} />
                </S.TimerWrap>
              )}
            </>
          )}
        </S.LoadingWrap>
      ) : (
        <>
          {/*** Сайдбар ***/}
          <TodosSidebar />

          <S.Content>
            <h1>Список дел</h1>

            <S.TabsWrapper>
              {/*** Вкладки ***/}
              <Tabs
                activeKey={selectedTab}
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
              <div title="Количество групп">Группы: {groupCount}</div>
              <div title="Задач в группе">Задачи: {taskCount}</div>

              {selectedTab !== '0' && (
                <div title="Количество завершенных задач в группе">
                  Завершено: {tasksFinished}/{taskCount}
                </div>
              )}

              {isDone && <S.DeleteTasks title="Удалить все завершенные" onClick={handleDeleteDone} />}
            </S.InfoBlock>
          </S.Content>

          {/*** Модалка ***/}
          <Modal />
        </>
      )}
    </S.Wrapper>
  );
};

export default TodosPage;
