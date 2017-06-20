/* eslint linebreak-style: 0 */
import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import createEvent from './createEvent';
import fetchEvents from './fetchEvents';

const rootReducer = combineReducers({
  auth, user, createEvent, fetchEvents
});

export default rootReducer;
