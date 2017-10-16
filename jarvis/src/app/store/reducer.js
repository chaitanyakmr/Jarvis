import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from '../../app';

/**
 * defining the state root
 */
export default combineReducers({
  routing: routerReducer,
  app: app.reducer
});
