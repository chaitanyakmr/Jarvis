import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as getMyBooksActions from '../data/actions'
/**
 * main saga file
 */
export function* getBooksAsync() {
    try {
        console.log("attempting to get the books via the api");
        const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts');
        yield put({ type: "GET_SUCCEEDED", data })
        console.log(response);
    } catch (e) {
        console.log("request failed");
        console.log(e);
        yield put({ type: "GET_FAILED", e })
    }
}


export default function* saga() {
    yield takeEvery(getMyBooksActions.GET_BOOKS, getBooksAsync);
}