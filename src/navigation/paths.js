import { lazy } from 'react';
import Layout from '../layout';

// const Layout = lazy(() => import('../layout'))

const paths = [
  {
    path: '/app',
    component: <Layout />,
    children: [
      {
        path: '/dashboard',
        component: <>Dashboard</>
      },
      {
        path: '/transfer',
        component: <>Transfer</>
      },
      {
        path: '/purchase',
        component: <>Purchase</>
      },
      {
        path: '/purchase',
        component: <>Payment</>
      },
      {
        path: '/profile',
        component: <>Profile</>
      },
      {
        path: '*',
        component: <>404</>
      }
    ]
  },
  {
    path: '/login',
    component: <>Login</>
  },
]

export default paths;