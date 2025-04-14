import { createHashRouter, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
import TodosPage from './pages/TodosPage/TodosPage';
import Page2 from './pages/Page2';
import NoPage from './pages/NoPage/NoPage';
// Components
import Work from './components/Work';
import Layout from './components/Layout/Layout';
import Contacts from './components/Contacts';

const Router = () => {
  return createHashRouter([
    {
      path: '/',
      element: <Navigate to="/#" />,
      errorElement: <NoPage />,
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/todos',
          element: <TodosPage />,
        },
        {
          path: '/2',
          element: <Page2 />,
          children: [
            {
              path: 'contacts',
              element: <Contacts />,
              children: [
                {
                  path: 'home',
                  element: <p>Home contacts</p>,
                },
                {
                  path: 'work',
                  element: <Work />,
                  children: [
                    {
                      path: 'private',
                      element: <p>Private contacts: P-123, P-234, P-456, P-657, P-98</p>,
                    },
                    {
                      path: 'public',
                      element: <p>Public contacts: 123, 234, 456, 657, 98</p>,
                    },
                  ],
                },
              ],
            },
            {
              path: 'map',
              element: <div>MAP</div>,
            },
          ],
        },
      ],
    },
  ]);
};

export default Router;
