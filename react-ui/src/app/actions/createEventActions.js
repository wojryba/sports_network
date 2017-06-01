/* eslint linebreak-style: 0 */
import { CALL_API } from '../middleware/api'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_CREATE_FAILURE = 'EVENT_CREATE_FAILURE'

export function createEvent (event) {
  return {
    [CALL_API]: {
      endpoint: `events/create`,
      authenticated: true,
      method: 'POST',
      data: event,
      types: [ EVENT_CREATE_SUCCESS, EVENT_CREATE_FAILURE ]
    }
  }
}
