import { FC } from 'react';
import * as S from './style';

interface CustomCheckProps {
  className?: string;
  value: boolean;
  onChange?: (state: boolean) => void;
  disabled?: boolean;
  children?: JSX.Element;
}

const CustomCheck: FC<CustomCheckProps> = ({ className, value, onChange, disabled, children }) => {
  return (
    <S.Wrapper className={className} checked={value} disabled={disabled}>
      <label>
        <input type="checkbox" checked={value} onChange={({ target: { checked } }) => onChange && onChange(checked)} />
        {children}
      </label>
    </S.Wrapper>
  );
};

export default CustomCheck;
