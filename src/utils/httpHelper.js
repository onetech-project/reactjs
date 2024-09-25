import { AUTH } from '../apis/contants'
import { store } from '../stores';
import { refreshTokenAction } from '../stores/actions';

const { REACT_APP_BACKEND_URL } = process.env;

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((cb) => cb(token));
};

export const fetchWithAuth = async (url, options = {}) => {
  const auth = store.getState()?.authReducer?.auth;
  const { accessToken, refreshToken } = auth || {};

  options.headers = {
    ...options.headers,
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  let response = await fetch(url, options);

  if (response.status === 401) {
    if (refreshToken) {
      try {
        if (!isRefreshing) {
          refreshSubscribers = [];
          isRefreshing = true;

          const refreshResponse = await fetch(`${REACT_APP_BACKEND_URL}${AUTH.REFRESH}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
          });

          if (refreshResponse.ok) {
            isRefreshing = false;
            const refreshData = await refreshResponse.json();
            store.dispatch(refreshTokenAction.fetchRefresh.succeed(refreshData));
            onRefreshed(refreshData.accessToken);
          } else {
            window.location.href = '/logout';
          }
        }

        response = new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            // replace the expired token and retry
            options.headers.Authorization = `Bearer ${token}`;
            resolve(fetch(url, options));
          });
        });
      } catch (error) {
        console.error('Error refreshing token:', error);
        return window.location.href = '/logout';
      }
    } else {
      return window.location.href = '/logout';
    }
  }

  // Return the final response
  return response;
}

export const fetchWithoutAuth = async (url, options = {}) => {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  };
  return fetch(url, options);

}