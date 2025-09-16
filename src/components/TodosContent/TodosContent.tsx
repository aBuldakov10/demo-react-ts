import { FC } from 'react';
import dayjs from 'dayjs';
import useTodosContent from './useTodosContent';
import { DATE, TIME } from '@/utils/constants';
import * as S from './style';

const TodosContent: FC<{ tabId: string }> = ({ tabId }) => {
  const {
    filteredTasks,
    groups,
    descTask,
    activeTask,
    selectedTab,
    editable,

    handleToggleCheck,
    handleEditTask,
    handleDeleteTask,
    handleCollapseTask,
    handleChangeDesc,
    handleBlurDesc,
  } = useTodosContent();

  return (
    <S.Wrapper id={tabId}>
      {filteredTasks.map(({ id, taskTitle, createDate, editDate, isEdited, isDone, groupId }) => {
        const group = groups.find(({ id }) => id === groupId); // группа текущей задачи для получения названия и цвета
        const groupTasks = filteredTasks.filter(({ groupId }) => groupId === group?.id).length; // количество задач одной группы
        // список завершенных задач одной группы
        const groupTasksFinished = filteredTasks.filter(({ isDone, groupId }) => isDone && group?.id === groupId);

        const createItems = (id: string, taskTitle: string) => {
          const thisDesc = descTask.find((item) => item.id === id)!; // объект текущей задачи

          return [
            {
              key: '1',
              label: `${taskTitle}`,
              children: (
                <>
                  <S.Task
                    value={thisDesc?.desc}
                    onChange={(e) => handleChangeDesc(e, id)}
                    onBlur={() => handleBlurDesc(thisDesc)}
                    rows={5}
                    readOnly={editable !== id}
                  />

                  {isEdited ? (
                    <S.TaskEdited>изменено {dayjs(editDate).format(TIME)}</S.TaskEdited>
                  ) : (
                    <S.TaskEdited>{dayjs(createDate).format(TIME)}</S.TaskEdited>
                  )}
                </>
              ),
            },
          ];
        };

        return (
          <S.TodosItem key={id}>
            {/*** Заголовок группы ***/}
            {selectedTab === '0' && (
              <S.TodosHeading>
                <S.GroupName clr={group?.color}>{group?.groupTitle}</S.GroupName>

                <S.GroupNoneTasks>
                  Завершено {groupTasksFinished.length}/{groupTasks}
                </S.GroupNoneTasks>
              </S.TodosHeading>
            )}

            {/*** Задача ***/}
            <S.TaskWrapper>
              <S.TaskDoneCheck value={isDone} onChange={() => handleToggleCheck(id)} />

              <S.TaskAction>
                <S.TaskActionDate>{dayjs(createDate).format(DATE)}</S.TaskActionDate>
                <S.EditGroup
                  enable={activeTask.includes(id) && !isDone}
                  title="Изменить описание"
                  onClick={() => handleEditTask(id)}
                />
                <S.DeleteGroup title="Удалить задачу" onClick={() => handleDeleteTask(id)} />
              </S.TaskAction>

              <S.Accordion
                data-task-id={id}
                className={isDone ? 'is-done' : ''}
                items={createItems(id, taskTitle)}
                onChange={(e) => handleCollapseTask(e, id)}
                expandIconPosition="end"
                bordered={false}
                destroyOnHidden={true}
              />
            </S.TaskWrapper>
          </S.TodosItem>
        );
      })}
    </S.Wrapper>
  );
};

export default TodosContent;
