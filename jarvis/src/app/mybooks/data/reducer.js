import { combineReducers } from 'redux';
import * as actions from './actions';

export const booksList = (state = [], action) => {
  switch (action.type) {
    case actions.GET_BOOKS_REQUEST_SUCCEEDED:
      console.log(action.payload);
      return action.payload;
    case actions.GET_BOOKS_REQUEST_FAILED:
      return action.payload;
    default:
      return state;
  }
};

export const registerBook = (state = [], action) => {
  switch (action.type) {
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
