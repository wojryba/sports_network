/* eslint linebreak-style: 0 */
import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import createEvent from './createEvent';
import fetchEvents from './fetchEvents';
import joinEvent from './joinEvent';


const rootReducer = combineReducers({
  auth, user, createEvent, fetchEvents, joinEvent
});

export default rootReducer;
