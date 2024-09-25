import { authAPI } from '../../apis';
import { FETCH_REFRESH } from '../types';

export const fetchRefresh = {
  request: () => ({
    type: FETCH_REFRESH.REQUEST
  }),
  succeed: (data) => ({
    type: FETCH_REFRESH.SUCCEED,
    payload: data
  }),
  failed: (error) => ({
    type: FETCH_REFRESH.FAILED,
    payload: error
  }),
  reset: () => ({
    type: FETCH_REFRESH.RESET,
  }),
}

export const fetchDataRefresh = (refreshToken) => async (dispatch) => {
  try {
    dispatch(fetchRefresh.request());
    const data = await authAPI.refreshToken(refreshToken);
    dispatch(fetchRefresh.succeed(data))
  } catch (error) {
    dispatch(fetchRefresh.failed(error));
  }
};