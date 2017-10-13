// import { takeEvery } from 'redux-saga';
// import { call, put } from 'redux-saga/effects';
import sites from '../mybooks'; 
 
/**
 * The entry point for the module saga
 * trigger fetch functions:
 * 1. action for fetch next url page was triggered
 */
export default function* saga() {
  yield [ 
    sites.saga() 
  ];
}
