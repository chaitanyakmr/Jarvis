import { combineReducers } from 'redux';
import mybooks from '../mybooks';

/**
 * The enrty point for the module state
 */
export default combineReducers({
  mybooks: mybooks.reducer,
});
