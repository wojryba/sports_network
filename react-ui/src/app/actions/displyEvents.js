/* eslint linebreak-style: 0 */
import { CALL_API } from '../middleware/api'

export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export function fetchEvents(profile) {
  // this is post request for saving user
  return {
    [CALL_API]: {
      endpoint: `events/fetch`,
      authenticated: true,
      method: 'GET',
      data: profile,
      types: [ FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR ]
    }
  }
}

export function addToEvent(id) {
  return {
    [CALL_API]: {
      endpoint: `events/addToEvent`,
      authenticated: true,
      method: 'POST',
      data: id,
      types: [ ADD_SUCCESS, ADD_ERROR ]
    }
  }
}
