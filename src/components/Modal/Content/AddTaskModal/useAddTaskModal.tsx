import { ChangeEvent, ComponentRef, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addTaskThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import { groupsSelector } from '@/store/todos/selectors';
import * as S from './style';

const useAddTaskModal = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);

  const [selectedGroup, setSelectedGroup] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [errorMsg, setErrorMsg] = useState({ group: '', taskName: '', taskDesc: '' });

  const selectRef = useRef<ComponentRef<typeof Select>>(null);

  const options = groups.map(({ id, groupTitle, color }) => {
    return { value: id, label: <S.OptionLabel clr={color}>{groupTitle}</S.OptionLabel> };
  });

  useEffect(() => {
    if (groups.length === 1) setSelectedGroup(groups[0].id);
  }, []);

  /*** Handlers ***/
  const handleChangeGroup = (value: unknown) => {
    setSelectedGroup(value as string);
    setErrorMsg({ ...errorMsg, group: '' });

    selectRef.current && selectRef.current.blur();
  };

  const handleChangeTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    setErrorMsg({ ...errorMsg, taskName: '' });
  };

  const handleChangeTaskDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDesc(e.target.value);
    setErrorMsg({ ...errorMsg, taskDesc: '' });
  };

  const handleSubmit = async () => {
    if (!selectedGroup || !taskName || !taskDesc) {
      setErrorMsg({
        group: !selectedGroup ? 'Обязательное поле' : '',
        taskName: !taskName ? 'Обязательное поле' : '',
        taskDesc: !taskDesc ? 'Обязательное поле' : '',
      });

      return false;
    }

    const groupObj = groups.find(({ id }) => id === selectedGroup)!; // группа, для которой добавляется задача
    const indexTab = (groups.indexOf(groupObj) + 1).toString(); // индекс группы во вкладках

    await dispatch(addTaskThunk({ taskTitle: taskName, description: taskDesc, groupId: selectedGroup }));
    await dispatch(selectGroup(indexTab));
    dispatch(closeModal());
  };

  return {
    manyGroups: groups.length > 1,
    selectRef,
    options,
    taskName,
    taskDesc,
    errorMsg,
    handleChangeGroup,
    handleChangeTaskName,
    handleChangeTaskDescription,
    handleSubmit,
  };
};

export default useAddTaskModal;
