import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Register from './assets/Component/Register';
import Login from './assets/Component/Login';
import Home from './assets/Component/Home';
import AouthProvider from './Provider/AouthProvider';
import Order from './assets/Component/Order';
import PrivetRoute from './assets/Component/PrivetRoute/PrivetRoute';
import Profile from './assets/Component/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/order',
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
      },

      {
        path: '/profile',
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AouthProvider>
      <RouterProvider router={router} />
    </AouthProvider>
  </StrictMode>
);
