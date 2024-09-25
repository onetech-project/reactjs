import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import './index.css';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? 'collapsed' : ''}`}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout;