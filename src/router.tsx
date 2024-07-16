import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Work from './components/Work';
import Layout from './components/Layout/Layout';
import Contacts from './components/Contacts';

const Router = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/demo-react-ts" />,
      errorElement: <div>error page</div>,
    },
    {
      path: '/demo-react-ts',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/demo-react-ts/1',
          element: <Page1 />,
        },
        {
          path: '/demo-react-ts/2',
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
