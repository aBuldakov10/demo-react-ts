import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { editTaskThunk } from '@/store/todos/thunks';
import { openModal } from '@/store/common/reducers';
import { setDeleteTaskId } from '@/store/todos/reducers';
import { filteredTasksSelector, groupsSelector } from '@/store/todos/selectors';

const useTodosContent = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const filteredTasks = useAppSelector(filteredTasksSelector);

  const [check, setCheck] = useState<string[]>([]); // тут хранить все чеки
  const [editable, setEditable] = useState(''); // id редактируемого поля
  const [activeTask, setActiveTask] = useState<string[]>([]); // массив раскрытых task
  const [descTask, setDescTask] = useState<{ id: string; desc: string }[]>([]); // описания задач для редактирования

  useEffect(() => {
    const descriptions = filteredTasks.map(({ id, description }) => ({ id, desc: description }));

    setDescTask(descriptions);
  }, [filteredTasks]);

  // завершение задачи
  const handleToggleCheck = (taskId: string) => {
    console.log(taskId, 'id');
    console.log(check.includes(taskId), 'include id');

    if (!check.includes(taskId)) {
      // add
      setCheck([...check, taskId]);
    } else {
      // remove
      setCheck([...check.filter((item) => item !== taskId)]);
    }
  };

  // редактирование описания
  const handleEditTask = (taskId: string) => {
    setEditable(taskId);

    const taskField = document.querySelector(`[data-task-id="${taskId}"] textarea`) as HTMLTextAreaElement;
    const length = taskField.value.length; // длинна текста поля

    taskField.focus(); // установить фокус в редактируемое поле
    taskField.setSelectionRange(length, length); // установить курсор в конце текста
  };

  // удаление задачи
  const handleDeleteTask = (taskId: string) => {
    dispatch(setDeleteTaskId(taskId));
    dispatch(openModal('ConfirmDeleteTaskModal'));
  };

  // обновить массив раскрытых task при раскрытии/сворачивании аккордеона
  const handleCollapseTask = (event: any, taskId: string) => {
    const filteredActiveTask = activeTask.filter((item) => item !== taskId);

    !!event.length ? setActiveTask([...activeTask, taskId]) : setActiveTask(filteredActiveTask);
  };

  // изменение описания
  const handleChangeDesc = (e: ChangeEvent<HTMLTextAreaElement>, taskId: string) => {
    setDescTask([...descTask.filter(({ id }) => id !== taskId), { id: taskId, desc: e.target.value }]);
  };

  // сохранение при потере фокуса
  const handleBlurDesc = ({ id, desc }: { id: string; desc: string }) => {
    setEditable(''); // убрать возможность редактирования поля (установить readOnly)

    // отправлять если были изменения
    const obj = filteredTasks.find((item) => item.id === id)!; // объект задачи полученный с сервера

    // проверить, были ли изменения в описании
    if (desc !== obj.description) dispatch(editTaskThunk({ taskId: id, description: desc }));
  };

  return {
    filteredTasks,
    groups,
    descTask,
    check,
    activeTask,
    editable,

    handleToggleCheck,
    handleEditTask,
    handleDeleteTask,
    handleCollapseTask,
    handleChangeDesc,
    handleBlurDesc,
  };
};

export default useTodosContent;
