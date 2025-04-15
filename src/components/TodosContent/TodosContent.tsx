import { FC, useState } from 'react';
import { Collapse } from 'antd';
import { useAppSelector } from '@/store/hooks';
import { filteredTasksSelector, groupsSelector } from '@/store/todos/selectors';
import * as S from './style';

const { Panel } = Collapse;

const TodosContent: FC<{ tabId: string }> = ({ tabId }) => {
  const groups = useAppSelector(groupsSelector);
  const filteredTasks = useAppSelector(filteredTasksSelector);

  const [check, setCheck] = useState<string[]>([]); // тут хранить все чеки

  const toggleCheck = (id: string) => {
    console.log(id, 'id');
    console.log(check.includes(id), 'include id');

    if (!check.includes(id)) {
      // add
      setCheck([...check, id]);
    } else {
      // remove
      setCheck([...check.filter((item) => item !== id)]);
    }
  };

  return (
    <S.Wrapper id={tabId}>
      {filteredTasks.map(({ id, groupId, taskTitle, description }) => {
        // временные переменные
        const group = groups.find(({ id }) => id === groupId); // группа текущей задачи
        const groupTasks = filteredTasks.filter(({ groupId }) => group?.id === groupId); // список задач одной группы
        const groupTasksFinished = groupTasks.filter(({ isDone }) => isDone); // список завершенных задач одной группы

        return (
          <S.TodosItem key={id}>
            {/*** Заголовок группы ***/}
            <S.TodosHeading>
              <S.GroupName clr={group?.color}>{group?.groupTitle}</S.GroupName>

              <S.GroupNoneTasks>
                завершено {groupTasksFinished.length}/{groupTasks.length}
              </S.GroupNoneTasks>

              <S.GroupAction>
                <S.AddTask
                  title="Создать задачу"
                  onClick={() => {
                    console.log(groupId, 'Создать задачу для группы');
                  }}
                />
                <S.EditGroup
                  title="Редактировать группу"
                  onClick={() => {
                    console.log(groupId, 'Редактировать группу для группы');
                  }}
                />
                <S.DeleteGroup
                  title="Удалить группу"
                  onClick={() => {
                    console.log(groupId, 'Удалить группу для группы');
                  }}
                />
              </S.GroupAction>
            </S.TodosHeading>

            {/*** Задача ***/}
            <S.Accordion defaultActiveKey={['1']} expandIconPosition="end" bordered={false}>
              <S.TaskDoneCheck value={check.includes(id)} onChange={() => toggleCheck(id)} />

              <S.TaskAction>
                <S.TaskActionDate>10.10.2000</S.TaskActionDate>
                <S.EditGroup
                  title="Редактировать задачу"
                  onClick={() => {
                    console.log(id, 'Редактировать задачу c id');
                  }}
                />
                <S.DeleteGroup
                  title="Удалить задачу"
                  onClick={() => {
                    console.log(id, 'Удалить задачу c id');
                  }}
                />
              </S.TaskAction>

              <Panel className="task" header={taskTitle} key={id}>
                <S.Task value={description} cols={30} rows={5} readOnly={true} />

                {/* при изменении отображается 'изменено' и время создания */}
                <S.TaskEdited>изменено 12:54</S.TaskEdited>
              </Panel>
            </S.Accordion>
          </S.TodosItem>
        );
      })}
    </S.Wrapper>
  );
};

export default TodosContent;
