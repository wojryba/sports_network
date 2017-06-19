/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/authActions';
import * as ActionTypes2 from '../actions/tutorialActions';

export default function user(state = {
  isFetching: false,
  isNew: '',
  error: ''
}, action) {
  switch (action.type) {
    case ActionTypes.USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.USER_SUCCESS:
      const isNewUser = JSON.parse(action.response);
      return Object.assign({}, state, {
        isFetching: false,
        isNew: isNewUser.isNew,
        error: ''
      })
    case ActionTypes.USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isNew: true,
        error: action.error
      })
    case ActionTypes2.TUTORIAL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isNew: false,
        error: ''
      })
    case ActionTypes2.TUTORIAL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isNew: true,
        error: action.error
      })
    default:
      return state
  }
}
