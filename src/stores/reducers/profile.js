import { FETCH_PROFILE } from '../types';

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
  type: null
};

export const profileReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_PROFILE.REQUEST:
      return {
        ...initialState,
        isLoading: true
      };
    case FETCH_PROFILE.SUCCEED:
      return {
        ...initialState,
        profile: payload,
        isLoading: false,
        type: action.type
      };
    case FETCH_PROFILE.FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        type: action.type
      };
    case FETCH_PROFILE.RESET:
      return initialState;
    default:
      return state;
  }
};
