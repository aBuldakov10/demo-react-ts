import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useLayout from './useLayout';
import * as S from './style';

const Layout: FC = () => {
  useLayout();

  return (
    <S.Wrapper>
      <Header />

      <S.Main>
        <div className="container">
          <Outlet />
        </div>
      </S.Main>

      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
