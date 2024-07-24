import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header: FC = () => {
  return (
    <S.Header>
      <div className="container">
        <S.Content>
          <div>LOGO</div>

          <S.Menu>
            <Link to="/">Home </Link> <br />
            <Link to="/todos">Todos</Link>
            {/*<br />*/}
            {/*<Link to="/2">Page 2 </Link>*/}
          </S.Menu>
        </S.Content>
      </div>
    </S.Header>
  );
};

export default Header;
