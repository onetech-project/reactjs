import { AUTH } from './contants'
import { httpHelper } from '../utils'

const { REACT_APP_BACKEND_URL } = process.env;

export const login = async ({ username, password }) => {
  const response = await httpHelper.fetchWithoutAuth(`${REACT_APP_BACKEND_URL}${AUTH.LOGIN}`, {
    method: 'POST',
    body: JSON.stringify({ username, password, expiresInMins: 1 }),
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}

export const getProfile = async () => {
  const response = await httpHelper.fetchWithAuth(`${REACT_APP_BACKEND_URL}${AUTH.PROFILE}`);
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}

export const logout = async () => {
  const response = await httpHelper.fetchWithAuth(`${REACT_APP_BACKEND_URL}${AUTH.LOGOUT}`, {
    method: 'POST',
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}