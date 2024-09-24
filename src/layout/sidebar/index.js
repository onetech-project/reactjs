import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/100" alt="Foto Profil" />
        <h3>Jane Doe</h3>
      </div>

      <ul>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>

      <ul className="mobile-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  )
}

export default Sidebar;