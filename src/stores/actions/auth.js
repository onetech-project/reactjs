import { authAPI } from '../../apis';
import { FETCH_LOGIN, FETCH_LOGOUT } from '../types';

export const fetchLogin = {
  request: () => ({
    type: FETCH_LOGIN.REQUEST
  }),
  succeed: (data) => ({
    type: FETCH_LOGIN.SUCCEED,
    payload: data
  }),
  failed: (error) => ({
    type: FETCH_LOGIN.FAILED,
    payload: error
  }),
  reset: () => ({
    type: FETCH_LOGIN.RESET,
  }),
}

export const fetchDataLogin = ({ username, password }) => async (dispatch) => {
  try {
    dispatch(fetchLogin.request());
    const data = await authAPI.login({ username, password });
    dispatch(fetchLogin.succeed(data))
  } catch (error) {
    dispatch(fetchLogin.failed(error.message));
  }
}

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_LOGOUT.REQUEST });
    await authAPI.logout();
    dispatch({ type: FETCH_LOGOUT.SUCCEED })
  } catch (error) {
    dispatch({ type: FETCH_LOGOUT.FAILED });
  }
};