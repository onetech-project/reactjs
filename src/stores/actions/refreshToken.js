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