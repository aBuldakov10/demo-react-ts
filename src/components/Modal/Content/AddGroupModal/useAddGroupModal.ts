import { ChangeEvent, useMemo, useState } from 'react';
import { ColorPickerProps, GetProp } from 'antd';
import { useAppDispatch } from '@/store/hooks';
import { addGroupThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { theme } from '@/styles/theme';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
type Format = GetProp<ColorPickerProps, 'format'>;

const useAddGroupModal = () => {
  const dispatch = useAppDispatch();

  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState<Color>(theme.colors.main);
  const [format, setFormat] = useState<Format | undefined>('hex');
  const [errorMsg, setErrorMsg] = useState('');

  // функция установления ширины в зависимости от формата
  const setWidth = (format: Format | undefined) => {
    if (format === 'hsb') return colorStr.length === 7 ? '210px' : '260px';
    if (format === 'rgb') return colorStr.length === 7 ? '180px' : '225px';

    return colorStr.length === 7 ? '130px' : '165px'; // hex
  };

  const colorStr = useMemo<string>(() => (typeof color === 'string' ? color : color?.toHexString()), [color]);
  const props = useMemo(() => ({ clr: colorStr, w: setWidth(format) }), [color, format]);

  /*** Handlers ***/
  const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
    setErrorMsg('');
  };

  const handleSubmit = () => {
    if (!groupName) {
      setErrorMsg('Обязательное поле');
      return false;
    }

    dispatch(addGroupThunk({ groupTitle: groupName, color: colorStr }));
    dispatch(closeModal());
  };

  return { groupName, errorMsg, format, setFormat, color, setColor, props, handleChangeGroupName, handleSubmit };
};

export default useAddGroupModal;
