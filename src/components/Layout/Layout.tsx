import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/demo-react-ts">Home </Link> <br />
        <Link to="/demo-react-ts/1">Page 1 </Link> <br />
        <Link to="/demo-react-ts/2">Page 2 </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
};

export default Layout;
