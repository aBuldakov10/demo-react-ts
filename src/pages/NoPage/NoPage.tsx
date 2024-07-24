import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const NoPage: FC = () => {
  const nav = useNavigate();

  return (
    <S.Wrapper>
      <S.Code>404</S.Code>
      <S.Text>Страница не найдена</S.Text>
      <button onClick={() => nav(-1)}>Вернуться</button>
    </S.Wrapper>
  );
};

export default NoPage;
