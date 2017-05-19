/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/authActions';

export default function user(state = {
  isFetching: false,
  user: {},
  error: ''
}, action) {
  console.log(action)
  switch (action.type) {
    case ActionTypes.USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response,
        error: ''
      })
    case ActionTypes.USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user: {},
        error: action.error
      })
    default:
      return state
  }
}
