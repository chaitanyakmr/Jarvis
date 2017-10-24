import 'regenerator-runtime/runtime';
import { take, takeEvery, fork, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as  MyBooksActions from '../data/actions'
/**
 * main saga file
 */
export function* getBooksAsync() {
    try {
        const response = yield call(axios.get, 'http://localhost:5000/api/books');
        yield put(MyBooksActions.getBooksRequestSucceeded(response.data));
    } catch (e) {
        console.log("request failed : " + e);
        yield put(MyBooksActions.getBooksRequestFailed(e));
    }
}

export function* postBooksAsync(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:5000/api/books', { books: action.payload });
        yield put(MyBooksActions.getBooksRequestSucceeded(response.data));
    } catch (e) {
        console.log("request failed : " + e);
        yield put(MyBooksActions.getBooksRequestFailed(e));
    }
}

export default function* saga() {
    yield takeLatest(MyBooksActions.GET_BOOKS_REQUEST_STARTED, getBooksAsync);
    yield takeLatest(MyBooksActions.POST_BOOKS_REQUEST_STARTED, postBooksAsync);
}