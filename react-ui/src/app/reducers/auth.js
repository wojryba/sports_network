/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/authActions';
const jwtDecode = require('jwt-decode');

function checkTokenExpiry() {
  let jwt = localStorage.getItem('id_token')
  if(jwt) {
    let jwtExp = jwtDecode(jwt).exp;
    let expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if(new Date() < expiryDate) {
      return true;
    }
  }
  return false;
}

function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}


export default function auth(state = [{
    isAuthenticated: checkTokenExpiry(),
    profile: getProfile(),
    error: ''
}], action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return [
        {
          isAuthenticated: checkTokenExpiry(),
          profile: action.profile,
          error: ''
        },
        ...state
      ]
    case ActionTypes.LOGIN_ERROR:
      return [
        {
          isAuthenticated: checkTokenExpiry(),
          profile: null,
          error: action.error
        },
        ...state
      ]
    case ActionTypes.LOGOUT_SUCCESS:
    return [
      {
        isAuthenticated: checkTokenExpiry(),
        profile: null,
        error: ''
      },
      ...state
    ]
    default:
      return state
    }
}
