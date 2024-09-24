import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import './index.css';

const Layout = () => {
  return  (
    <>
      <Header />
      <Sidebar />
      <div className="content" id="content">
        <Outlet />
      </div>
    </>
  )
}

export default Layout;