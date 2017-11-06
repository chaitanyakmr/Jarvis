import 'regenerator-runtime/runtime';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as MyBooksActions from '../data/actions';
/**
 * main saga file
 */
export function* getBooksAsync() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/api/books1');
    yield put(MyBooksActions.getBooksRequestSucceeded(response.data));
  } catch (e) {
    /* eslint-disable no-debugger */
    debugger;
    console.log('request failed ');
    yield put(MyBooksActions.getErrorMessage(e));
  }
}


export function* logError(action) {
  const statusCodes = yield call(axios.get, '/resources/errorCodes.json');
  /* eslint-disable no-debugger */
  debugger;
  yield put(MyBooksActions.getBooksRequestFailed(statusCodes.data.filter((item) => {
    return item.code === action.payload.response.status;
  })));
}

export function* postBooksAsync(action) {
  try {
    console.log('postBooksAsync started');
    const response = yield call(axios.post, 'http://localhost:5000/api/books', { books: action.payload });
    yield put(MyBooksActions.getBooksRequestSucceeded(response.data));
  } catch (e) {
    console.log('request failed : ');
    yield put(MyBooksActions.getBooksRequestFailed(e));
  }
}

export default function* saga() {
  yield takeLatest(MyBooksActions.GET_BOOKS_REQUEST_STARTED, getBooksAsync);
  yield takeLatest(MyBooksActions.POST_BOOKS_REQUEST_STARTED, postBooksAsync);
  yield takeLatest(MyBooksActions.GET_ERROR_REQUEST_STARTED, logError);
}
