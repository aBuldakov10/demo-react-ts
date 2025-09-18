import { ComponentRef, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteGroupThunk, getTasksThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { groupTasks, selectGroup } from '@/store/todos/reducers';
import {
  groupedTasksSelector,
  groupsSelector,
  selectedGroupIdSelector,
  selectedTabSelector,
} from '@/store/todos/selectors';
import * as S from './style';

const useDeleteGroupModal = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const selectedGroupId = useAppSelector(selectedGroupIdSelector);
  const selectedTab = useAppSelector(selectedTabSelector);
  const groupedTasks = useAppSelector(groupedTasksSelector);

  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [allowDelete, setAllowDelete] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const selectRef = useRef<ComponentRef<typeof Select>>(null);

  const options = groups.map(({ id, groupTitle, color }) => {
    return { value: id, label: <S.OptionLabel clr={color}>{groupTitle}</S.OptionLabel> };
  });
  const filterOptions = (input: string, option: any) => {
    return (option?.label.props.children ?? '').toLowerCase().includes(input.toLowerCase());
  };

  useEffect(() => {
    if (groups.length === 1) {
      setSelectedGroup([groups[0].id]);
      setAllowDelete(true);
    }
  }, []);

  /*** Handlers ***/
  // отслеживает изменение открытия выпадающего списка
  const handleOpenChange = (open: boolean) => {
    setDropdownOpened(open);

    if (!open) {
      setTimeout(() => selectRef.current && selectRef.current.blur(), 300);

      selectedGroup.length ? setTimeout(() => setAllowDelete(true), 300) : setTimeout(() => setAllowDelete(false), 300);
    }
  };

  const handleChangeGroup = (value: unknown) => setSelectedGroup(value as string[]); // выбор группы

  // отмена выбранной группы
  const handleDeselect = (value: unknown) => {
    if (!dropdownOpened && selectedGroup.length === 1 && value === selectedGroup[0]) setAllowDelete(false);
  };

  const handleSubmit = async () => {
    const groupList = await dispatch(deleteGroupThunk(selectedGroup)).unwrap(); // список групп после удаления группы

    await dispatch(getTasksThunk()); // получение списка задач

    if (groupList.length === 1) {
      await dispatch(selectGroup('1')); // если остается одна группа после удаления, выбрать ее
    } else {
      // после удаления остается несколько групп
      if (selectedGroupId && selectedGroup.includes(selectedGroupId)) {
        await dispatch(selectGroup('0')); // при удалении группы активной вкладки выбрать вкладку по умолчанию("все")
      } else {
        // обновить список задач с учетом группировки
        if (groupedTasks) {
          await dispatch(groupTasks(true));
        } else {
          await dispatch(selectGroup(selectedTab));
        }
      }
    }

    dispatch(closeModal());
  };

  return {
    manyGroups: groups.length > 1,
    allowDelete,
    selectRef,
    options,
    filterOptions,
    selectedGroup,
    handleChangeGroup,
    handleOpenChange,
    handleDeselect,
    handleSubmit,
  };
};

export default useDeleteGroupModal;
