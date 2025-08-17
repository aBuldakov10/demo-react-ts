import { FC } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import * as S from './style';

interface OptionsType {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface CustomRadioProps {
  className?: string;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
  label?: string;
  id?: string;
  options: OptionsType[];
  value: string | number;
  onChange: (value: RadioChangeEvent) => void;
}

const CustomRadio: FC<CustomRadioProps> = ({
  className = '',
  direction = 'horizontal',
  disabled,
  label,
  id = '',
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <S.Wrapper className={`${className} ${direction} ${disabled ? 'disabled' : ''}`}>
      {label && <S.Label>{label}</S.Label>}

      <Radio.Group id={id} options={options} value={value} onChange={onChange} disabled={disabled} {...props} />
    </S.Wrapper>
  );
};

export default CustomRadio;
