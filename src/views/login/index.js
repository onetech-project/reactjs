import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FETCH_LOGIN } from '../../stores/types';
import { authAction } from '../../stores/actions';
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, error, type } = authReducer || {};

  useEffect(() => {
    if (type === FETCH_LOGIN.SUCCEED) { navigate('/app/dashboard') };
    if (type === FETCH_LOGIN.FAILED) { setErrorMessage(error) };
  }, [type]);

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    setUsername(usernameValue);
    validateForm(usernameValue, password);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validateForm(username, passwordValue);
  };

  const validateForm = (username, password) => {
    if (username && password.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    dispatch(authAction.fetchDataLogin({ username: username, password }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={togglePasswordVisibility}
            >
              👁️
            </button>
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit" className={`login-btn ${isFormValid && !isLoading ? "active" : ""}`} disabled={!isFormValid || isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
