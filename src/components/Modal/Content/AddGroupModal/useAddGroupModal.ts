import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addGroupThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { theme } from '@/styles/theme';
import { Color, Format } from '@/types/common';
import { setColorPackerWidth } from '@/utils/functions';

const useAddGroupModal = () => {
  const dispatch = useAppDispatch();

  const [groupName, setGroupName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [format, setFormat] = useState<Format | undefined>('hex');
  const [color, setColor] = useState<Color>(theme.colors.main);

  const inputRef = useRef<HTMLInputElement>(null);

  const colorStr = useMemo<string>(() => (typeof color === 'string' ? color : color?.toHexString()), [color]);
  const props = useMemo(() => ({ clr: colorStr, w: setColorPackerWidth(format, colorStr) }), [color, format]);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  /*** Handlers ***/
  const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
    setErrorMsg('');
  };

  const handleSubmit = async () => {
    if (!groupName) {
      setErrorMsg('Обязательное поле');
      return false;
    }

    await dispatch(addGroupThunk({ groupTitle: groupName, color: colorStr }));
    dispatch(closeModal());
  };

  return {
    inputRef,
    groupName,
    errorMsg,
    format,
    setFormat,
    color,
    setColor,
    props,
    handleChangeGroupName,
    handleSubmit,
  };
};

export default useAddGroupModal;
