/* eslint linebreak-style: 0 */
import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import createEvent from './createEvent';

const rootReducer = combineReducers({
  auth, user, createEvent
});

export default rootReducer;
