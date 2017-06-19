/* eslint linebreak-style: 0 */
import { CALL_API } from '../middleware/api'

export const TUTORIAL_REQUEST = 'TUTORIAL_REQUEST'
export const TUTORIAL_SUCCESS = 'TUTORIAL_SUCCESS'
export const TUTORIAL_FAILURE = 'TUTORIAL_FAILURE'

export function saveTutorial(profile) {
  // this is post request for saving users tutorial
  return {
    [CALL_API]: {
      endpoint: `tutorial`,
      authenticated: true,
      method: 'POST',
      data: profile,
      types: [ TUTORIAL_SUCCESS, TUTORIAL_FAILURE ]
    }
  }
}
