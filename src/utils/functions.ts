import dayjs from 'dayjs';
import { Format } from '@/types/common';
import { TaskType } from '@/types/todos';

// функция установления ширины ColorPacker в зависимости от формата цвета
export const setColorPackerWidth = (format: Format | undefined, colorStr: string) => {
  if (format === 'hsb') return colorStr.length === 7 ? '210px' : '260px';
  if (format === 'rgb') return colorStr.length === 7 ? '180px' : '225px';

  return colorStr.length === 7 ? '130px' : '165px'; // hex
};

// функция форматирования даты в payload в свой часовой пояс. в createDate и editDate приходит в UTC
export const formatFromUTC = (payload: TaskType[]) => {
  return payload.map((item) => ({
    ...item,
    createDate: dayjs(item.createDate).format(),
    editDate: item.editDate ? dayjs(item.editDate).format() : null,
  }));
};
