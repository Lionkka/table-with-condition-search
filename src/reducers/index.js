import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import users from './users';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  users,
});

export default rootReducer;
