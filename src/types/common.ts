import { ColorPickerProps, GetProp } from 'antd';

// ColorPicker
export type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
export type Format = GetProp<ColorPickerProps, 'format'>;
