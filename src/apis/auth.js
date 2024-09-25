import { AUTH } from './contants'

const { REACT_APP_BACKEND_URL } = process.env;

const headers = {
  'Content-Type': 'application/json'
}

export const login = async ({ username, password }) => {
  const response = await fetch(`${REACT_APP_BACKEND_URL}${AUTH.LOGIN}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ username, password }),
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}

export const getProfile = async () => {
  const response = await fetch(`${REACT_APP_BACKEND_URL}${AUTH.PROFILE}`, {
    credentials: 'include'
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}

export const refreshToken = async (refreshToken) => {
  const response = await fetch(`${REACT_APP_BACKEND_URL}${AUTH.REFRESH}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      refreshToken
    }),
    credentials: 'include'
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}

export const logout = async () => {
  const response = await fetch(`${REACT_APP_BACKEND_URL}${AUTH.LOGOUT}`, {
    method: 'POST',
  })
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.message)
}