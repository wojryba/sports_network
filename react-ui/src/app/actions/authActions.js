/* eslint linebreak-style: 0 */
import { CALL_API } from '../middleware/api'
import AuthService from '../../utils/AuthService'
export const auth = new AuthService('oUyDXX0mhthNzrPsx8qr7r4KpxkFVjSL', 'wojryba.eu.auth0.com');
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err
  }
}

export function login() {
  auth.lock.show();
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function logout() {
  auth.logout();
  return {
    type: LOGOUT_SUCCESS
  }
}

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'


export function checkAndSaveUser(profile) {
  // this is post request for saving user
  return {
    [CALL_API]: {
      endpoint: `userLogin`,
      authenticated: true,
      method: 'POST',
      data: profile,
      types: [ USER_SUCCESS, USER_FAILURE ]
    }
  }
}


  /* this is example get request
  [CALL_API]: {
    endpoint: `userLogin`,
    authenticated: true,
    types: [ USER_SUCCESS, USER_FAILURE ]
  } */
