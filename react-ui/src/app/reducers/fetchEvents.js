/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/displyEvents';

export default function fetchEvents(state = [{
  isFetching: false,
  events: null,
  error: ''
}], action) {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return [
        {
          isFetching: false,
          events: JSON.parse(action.response),
          error: ''
        },
        ...state
      ];
    case ActionTypes.FETCH_EVENTS_ERROR:
    return [
      {
        isFetching: false,
        events: null,
        error: action.error
      },
      ...state
    ];
    default:
      return state
  }
}
