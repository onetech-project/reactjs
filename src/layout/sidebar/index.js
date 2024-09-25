import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from '../../stores/actions'
import paths from "../../navigation/paths";
import './index.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const profileReducer = useSelector(state => state.profileReducer);
  const { profile } = profileReducer || {};

  useEffect(() => {
    dispatch(profileAction.fetchDataProfile())
  }, [])

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="profile">
        <img src={profile?.image} alt="Foto Profil" />
        <h3>{profile?.firstName} {profile?.lastName}</h3>
      </div>

      <ul>
        {paths.protected[0].children.filter(x => x.isMenu).map(x => <li key={x.path} onClick={toggleSidebar}><Link to={x.path}>{x.name}</Link></li>)}
        <li><Link to="/logout">Logout</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar;