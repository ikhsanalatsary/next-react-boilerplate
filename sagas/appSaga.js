/* global fetch */

import { delay } from 'redux-saga';
import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-fetch';

import { LOAD_DATA, START_CLOCK } from '../constants/appConstant';
import { failure, loadDataSuccess, tickClock } from '../actions/appAction';

es6promise.polyfill();

function* runClockSaga() {
  yield take(START_CLOCK);
  /* eslint-disable no-constant-condition */
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 800);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* appWatcher() {
  yield all([call(runClockSaga), takeLatest(LOAD_DATA, loadDataSaga)]);
}

export default appWatcher;
