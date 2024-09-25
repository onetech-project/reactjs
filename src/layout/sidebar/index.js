import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './index.css';
import paths from "../../navigation/paths";

const Sidebar = () => {
  const authReducer = useSelector(state => state.authReducer);
  const { auth } = authReducer || {};

  return (
    <div className="sidebar" id="sidebar">
      <div className="profile">
        <img src={auth?.image} alt="Foto Profil" />
        <h3>{auth?.firstName} {auth?.lastName}</h3>
      </div>

      <ul>
        {paths.protected[0].children.filter(x => x.isMenu).map(x => <li key={x.path}><Link to={x.path}>{x.name}</Link></li>)}
        <li><Link to="/logout">Logout</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar;