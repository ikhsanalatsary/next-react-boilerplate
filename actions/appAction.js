import {
  FAILURE,
  INCREMENT,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  START_CLOCK,
  TICK_CLOCK,
} from '../constants/appConstant';

export function failure(error) {
  return {
    type: FAILURE,
    error,
  };
}

export function increment() {
  return { type: INCREMENT };
}

export function loadData() {
  return { type: LOAD_DATA };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock() {
  return { type: START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
