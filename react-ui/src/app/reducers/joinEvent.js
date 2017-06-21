/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/displyEvents';

export default function joinEvents(state = [{
  isFetching: false,
  joined: false,
  error: ''
}], action) {
  switch (action.type) {
    case ActionTypes.ADD_SUCCESS:
      return [
        {
          isFetching: false,
          joined: true,
          error: ''
        },
        ...state
      ];
    case ActionTypes.ADD_ERROR:
      return [
        {
          isFetching: false,
          joined: false,
          error: action.error
        },
        ...state
      ];
    case ActionTypes.ADDED:
    return [
      {
        isFetching: false,
        joined: false,
        error: ''
      },
      ...state
    ];
    default:
      return state
  }
}
