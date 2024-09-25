import React, { lazy } from 'react';

const Layout = lazy(() => import('../layout'));
const Login = lazy(() => import('../views/login'));
const Logout = lazy(() => import('../views/logout'));

const paths = {
  protected: [
    {
      path: '/app',
      component: <Layout />,
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: <>Dashboard</>,
          isMenu: true
        },
        {
          name: 'Transfer',
          path: 'transfer',
          component: <>Transfer</>,
          isMenu: true
        },
        {
          name: 'Purchase',
          path: 'purchase',
          component: <>Purchase</>,
          isMenu: true
        },
        {
          name: 'Payment',
          path: 'payment',
          component: <>Payment</>,
          isMenu: true
        },
        {
          path: '*',
          component: <>404</>
        }
      ]
    },
  ],
  public: [
    {
      path: '/',
      component: <Login />
    },
    {
      path: '/logout',
      component: <Logout />,
    }
  ]
}

export default paths;