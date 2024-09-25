import { FETCH_LOGIN, FETCH_LOGOUT, FETCH_REFRESH } from '../types';

const initialState = {
  auth: null,
  isLoading: false,
  error: null,
  type: null
};

export const authReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_LOGIN.REQUEST:
      return {
        ...initialState,
        isLoading: true
      };
    case FETCH_LOGIN.SUCCEED:
      return {
        ...initialState,
        auth: payload,
        isLoading: false,
        type: action.type
      };
    case FETCH_REFRESH.SUCCEED:
      return {
        ...state,
        auth: {
          ...state.auth,
          ...payload
        },
        isLoading: false,
        type: action.type
      };
    case FETCH_LOGIN.FAILED:
    case FETCH_LOGOUT.FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        type: action.type
      };
    case FETCH_LOGIN.RESET:
      return initialState;
    default:
      return state;
  }
};
