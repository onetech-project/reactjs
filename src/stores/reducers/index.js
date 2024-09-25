import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { profileReducer } from './profile';
import { refreshTokenReducer } from './refreshToken';
import { FETCH_LOGOUT } from '../types';

const reducers = combineReducers({
  authReducer,
  profileReducer,
  refreshTokenReducer
})

const appReducer = (state, action) => {
  if (action.type === FETCH_LOGOUT.SUCCEED) {
    return reducers(undefined, action);
  }
  return reducers(state, action)
};

export default appReducer;