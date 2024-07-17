import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home </Link> <br />
        <Link to="/1">Page 1 </Link> <br />
        <Link to="/2">Page 2 </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
};

export default Layout;
