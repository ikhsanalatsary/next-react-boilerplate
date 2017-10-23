import { all, fork } from 'redux-saga/effects';
import appSaga from './appSaga';

function* rootSaga() {
  yield all([
    fork(appSaga),
  ]);
}

export default rootSaga;
