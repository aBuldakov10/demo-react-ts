import { Format } from '@/types/common';

// функция установления ширины ColorPacker в зависимости от формата цвета
export const setColorPackerWidth = (format: Format | undefined, colorStr: string) => {
  if (format === 'hsb') return colorStr.length === 7 ? '210px' : '260px';
  if (format === 'rgb') return colorStr.length === 7 ? '180px' : '225px';

  return colorStr.length === 7 ? '130px' : '165px'; // hex
};
