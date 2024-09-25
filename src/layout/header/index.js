import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../logo.svg'
import './index.css';

const Header = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const menuIcon = document.getElementById('menu-icon');

    sidebar.classList.toggle('open');
    content.classList.toggle('collapsed');

    menuIcon.classList.toggle('bi-list') // Icon burger
    menuIcon.classList.toggle('bi-x') // Icon silang (X)

    // Toggle the icon between burger and X
    if (sidebar.classList.contains('open')) {
      menuIcon.style.color = '#FFF';
    } else {
      menuIcon.style.color = '#000';
    }
  }
  return (
    <div id="header" className="header">
      <div className="logo"><Link to="/"><img src={Logo} alt='Logo'></img></Link></div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i id="menu-icon" className="bi bi-list"></i>
      </button>
    </div>
  )
}

export default Header;