import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../logo.svg'
import './index.css';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const [menuIcon, setMenuIcon] = useState('bi-list');
  const [menuColor, setMenuColor] = useState('#000');

  useEffect(() => {
    setMenuIcon(isSidebarOpen ? 'bi-x' : 'bi-list');
    setMenuColor(isSidebarOpen ? '#FFF' : '#000');
  }, [isSidebarOpen])

  return (
    <div className="header">
      <div className="logo"><Link to="/"><img src={Logo} alt='Logo'></img></Link></div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i style={{ color: menuColor }} className={`bi ${menuIcon}`} />
      </button>
    </div>
  )
}

export default Header;