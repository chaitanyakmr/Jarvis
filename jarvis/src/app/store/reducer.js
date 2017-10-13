import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; 

/**
 * defining the state root
 */
export default combineReducers({ 
  routing: routerReducer,
});
