/* eslint linebreak-style: 0 */
import * as ActionTypes from '../actions/createEventActions';

export default function createEvent(state = [{
  isFetching: false,
  eventCreated: false,
  error: ''
}], action) {
  switch (action.type) {
    case ActionTypes.EVENT_CREATE_SUCCESS:
      return [
        {
          isFetching: false,
          eventCreated: true,
          error: ''
        },
        ...state
      ];
    case ActionTypes.EVENT_CREATE_FAILURE:
    return [
      {
        isFetching: false,
        eventCreated: false,
        error: action.error
      },
      ...state
    ];
    default:
      return state
  }
}
