import 'regenerator-runtime/runtime';
import { take, takeEvery, fork } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as getMyBooksActions from '../data/actions'
/**
 * main saga file
 */
export function* getBooksAsync() {
    try {
        console.log("attempting to get the books via the api");
        const response = yield call(axios.get, 'http://localhost:5000/api/books');
        yield put(getMyBooksActions.getBooksRequestSucceeded(response));
        console.log(response);
    } catch (e) {
        console.log("request failed");
        console.log(e);
        yield put(getMyBooksActions.getBooksRequestFailed(), e);
    }
}


export default function* saga() {
    yield takeEvery(getMyBooksActions.getBooksRequestStarted, getBooksAsync);
}