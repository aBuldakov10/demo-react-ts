import { Link, Outlet } from 'react-router-dom';

const Work = () => {
  return (
    <div>
      <Link to="/demo-react-ts/2/contacts/work/private">Private work contacts</Link> <br />
      <Link to="/demo-react-ts/2/contacts/work/public"> Public work contacts</Link>
      <Outlet />
    </div>
  );
};

export default Work;
