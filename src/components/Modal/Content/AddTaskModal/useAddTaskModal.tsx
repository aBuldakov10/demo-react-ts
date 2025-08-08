import { ChangeEvent, ComponentRef, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import * as S from './style';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { groupsSelector } from '@/store/todos/selectors';
import { addTaskThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';

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

  const handleSubmit = () => {
    if (!selectedGroup || !taskName || !taskDesc) {
      setErrorMsg({
        group: !selectedGroup ? 'Обязательное поле' : '',
        taskName: !taskName ? 'Обязательное поле' : '',
        taskDesc: !taskDesc ? 'Обязательное поле' : '',
      });

      return false;
    }

    dispatch(addTaskThunk({ taskTitle: taskName, description: taskDesc, groupId: selectedGroup }));
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
