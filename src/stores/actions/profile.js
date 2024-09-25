import { authAPI } from '../../apis';
import { FETCH_PROFILE } from '../types';

export const fetchProfile = {
  request: () => ({
    type: FETCH_PROFILE.REQUEST
  }),
  succeed: (data) => ({
    type: FETCH_PROFILE.SUCCEED,
    payload: data
  }),
  failed: (error) => ({
    type: FETCH_PROFILE.FAILED,
    payload: error
  }),
  reset: () => ({
    type: FETCH_PROFILE.RESET,
  }),
}

export const fetchDataProfile = () => async (dispatch) => {
  try {
    dispatch(fetchProfile.request());
    const data = await authAPI.getProfile();
    dispatch(fetchProfile.succeed(data))
  } catch (error) {
    dispatch(fetchProfile.failed(error));
  }
};