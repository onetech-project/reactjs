import React, { useEffect } from "react";
import './index.css';  // Import file CSS untuk styling
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../../stores/actions";

const Logout = () => {
  const authReducer = useSelector(state => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, error } = authReducer || {};

  useEffect(() => {
    dispatch(authAction.logout())
  }, [])

  useEffect(() => {
    if (!auth) { navigate('/') }
  }, [auth])

  return (
    <div className="logout-container">
      <div className="spinner" />
      <h2>{error ? `Error: ${error}` : 'Logging Out...'}</h2>
    </div>
  );
}

export default Logout;
