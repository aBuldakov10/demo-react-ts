import { ChangeEvent, ComponentRef, useMemo, useRef, useState } from 'react';
import { Select } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { editGroupThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { groupsSelector } from '@/store/todos/selectors';
import { theme } from '@/styles/theme';
import { Color, Format } from '@/types/common';
import { setColorPackerWidth } from '@/utils/functions';
import * as S from './style';

const useEditGroupModal = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);

  const [selectedGroup, setSelectedGroup] = useState('');
  const [groupName, setGroupName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [format, setFormat] = useState<Format | undefined>('hex');
  const [color, setColor] = useState<Color>(theme.colors.main);

  const selectRef = useRef<ComponentRef<typeof Select>>(null);

  const options = groups.map(({ id, groupTitle, color }) => {
    return { value: id, label: <S.OptionLabel clr={color}>{groupTitle}</S.OptionLabel> };
  });

  const colorStr = useMemo<string>(() => (typeof color === 'string' ? color : color?.toHexString()), [color]);
  const props = useMemo(() => ({ clr: colorStr, w: setColorPackerWidth(format, colorStr) }), [color, format]);

  /*** Handlers ***/
  const handleChangeGroup = (value: unknown) => {
    const groupObj = groups.find(({ id }) => id === value)!;

    setSelectedGroup(value as string);
    setGroupName(groupObj.groupTitle);
    setColor(groupObj.color);

    selectRef.current && selectRef.current.blur();
  };

  const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
    setErrorMsg('');
  };

  const handleSubmit = () => {
    if (!groupName) {
      setErrorMsg('Обязательное поле');
      return false;
    }

    dispatch(editGroupThunk({ id: selectedGroup, data: { groupTitle: groupName, color: colorStr } }));
    dispatch(closeModal());
  };

  return {
    selectRef,
    options,
    selectedGroup,
    groupName,
    errorMsg,
    format,
    setFormat,
    color,
    setColor,
    props,
    handleChangeGroup,
    handleChangeGroupName,
    handleSubmit,
  };
};

export default useEditGroupModal;
