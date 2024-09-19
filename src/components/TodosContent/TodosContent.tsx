import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { tasks } from '../../pages/Todos/fakeApi';
import { groups } from '../../pages/Todos/fakeApi';
import * as S from './style';
// import CustomCheck from '../Form/CustomCheck/CustomCheck';

const { Panel } = Collapse;

const TodosContent: FC<{ tabId: string }> = ({ tabId }) => {
  // продолжить тут. сделать верстку для задач,
  // потом прикрутить логику и бэк и поправить (порефакторить?) родительский компонент

  const [taskHeaderList, setTaskHeaderList] = useState<any>([]); // список заголовков аккордионов
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const taskHeaders = document.querySelectorAll('.task > .ant-collapse-header');

    setTaskHeaderList(taskHeaders);
  }, []);

  return (
    <S.Wrapper id={tabId}>
      {tabId === '0' ? (
        <>
          {tasks.map((item, index) => {
            // временные переменные
            const group = groups.find((groupsItem) => groupsItem.id === item.groupId);
            const groupTasks = tasks.filter((taskItem) => group && group.id === taskItem.groupId);
            const groupTasksFinished = groupTasks.filter((taskItem) => taskItem.isDone);

            console.log(groupTasks.length, 'asd');
            console.log(groupTasksFinished, 'groupTasksFinished');

            return (
              <S.TodosItem key={index}>
                <S.TodosHeading>
                  <S.GroupName clr={group && group.color}>{group && group.groupTitle}</S.GroupName>

                  <S.GroupNoneTasks>
                    завершено {groupTasksFinished.length}/{groupTasks.length}
                  </S.GroupNoneTasks>

                  <S.GroupAction>
                    <S.AddTask title="Создать задачу" onClick={() => {}} />
                    <S.EditGroup title="Редактировать группу" onClick={() => {}} />
                    <S.DeleteGroup title="Удалить группу" onClick={() => {}} />
                  </S.GroupAction>
                </S.TodosHeading>

                <S.Accordion defaultActiveKey={['1']} expandIconPosition="end" bordered={false} onChange={() => {}}>
                  {/*<CustomCheck value={check} onChange={() => setCheck(!check)} disabled={true}>*/}
                  {/*  <span>Custom Check Label</span>*/}
                  {/*</CustomCheck>*/}
                  {/*<CustomCheck value={check} onChange={() => setCheck(!check)} disabled={true} />*/}

                  {/*<CustomCheck value={check} onChange={() => setCheck(!check)} disabled={false}>*/}
                  {/*  <span>Custom Check Label</span>*/}
                  {/*</CustomCheck>*/}
                  <S.TaskDoneCheck value={check} onChange={() => setCheck(!check)} disabled={false} />

                  <S.TaskAction
                    data-header-height={taskHeaderList.length && taskHeaderList[index].clientHeight}
                    onClick={() => {}}
                  >
                    <S.TaskActionDate>10.10.2000</S.TaskActionDate>
                    <S.EditGroup title="Редактировать задачу" onClick={() => {}} />
                    <S.DeleteGroup title="Удалить задачу" onClick={() => {}} />
                  </S.TaskAction>

                  <Panel className="task" header={item.taskTitle} key="1">
                    <p>{item.description}</p>
                  </Panel>
                </S.Accordion>
              </S.TodosItem>
            );
          })}
        </>
      ) : (
        `Список всех групп и всех задач для вкладки ${tabId}`
      )}
    </S.Wrapper>
  );
};

export default TodosContent;
