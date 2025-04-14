import { ChangeEvent, FC } from 'react';
import * as S from './style';

interface CustomCheckProps {
  className?: string;
  value: boolean;
  onChange?: (state: boolean) => void;
  children?: JSX.Element;
  disabled?: boolean;
}

const CustomCheck: FC<CustomCheckProps> = (props) => {
  const { className, value, onChange, disabled, children } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);

  return (
    <S.Wrapper className={className} checked={value} disabled={disabled}>
      <label>
        <input type="checkbox" checked={value} onChange={handleChange} />

        {children}
      </label>
    </S.Wrapper>
  );
};

export default CustomCheck;
