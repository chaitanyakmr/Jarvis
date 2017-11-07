import { combineReducers } from 'redux';
import * as actions from './actions';

export const booksList = (state = [], action) => {
  switch (action.type) {
    case actions.GET_BOOKS_REQUEST_SUCCEEDED:
      console.log(action.payload);
      return action.payload;
    case actions.GET_BOOKS_REQUEST_FAILED:
      /* eslint-disable no-debugger */
      debugger;
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const registerBook = (state = { hasError: false, payload: {} }, action) => {
  switch (action.type) {
    case actions.POST_BOOKS_REQUEST_STARTED:
      /* eslint-disable no-debugger */
      debugger;
      return { hasError: true, payload: action.payload };
    case actions.POST_BOOKS_REQUEST_SUCCEEDED:
      console.log(action.payload);
      return action.payload;
    case actions.POST_BOOKS_REQUEST_FAILED:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  booksList, registerBook,
});
