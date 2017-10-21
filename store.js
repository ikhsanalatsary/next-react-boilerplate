import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const dev = process.env.NODE_ENV !== 'production';
const windowExist = typeof window === 'object';
const root = () =>
  combineReducers({
    global: rootReducer,
  });

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  dev && windowExist && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/* eslint-enable */
export function configureStore(initialState = {}) {
  /* eslint-disable no-param-reassign */
  if (!initialState.toJS) initialState = Immutable(initialState);

  /* eslint-enable */
  const store = createStore(
    root(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent));
}
