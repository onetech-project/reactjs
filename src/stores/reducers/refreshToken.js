import { FETCH_REFRESH } from '../types';

const initialState = {
  isLoading: false,
  error: null,
  type: null
};

export const refreshTokenReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_REFRESH.REQUEST:
      return {
        error: null,
        isLoading: true
      };
    case FETCH_REFRESH.FAILED:
      return {
        isLoading: false,
        error: payload,
        type: action.type
      };
    case FETCH_REFRESH.RESET:
      return initialState;
    default:
      return state;
  }
};
