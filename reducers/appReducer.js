import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';
import { FAILURE, INCREMENT, LOAD_DATA_SUCCESS, TICK_CLOCK } from '../constants/appConstant';

export const GlobalState = Immutable({
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: [],
});

const increment = (count) => count + 1;

const appReducer = createReducer(GlobalState, {
  [FAILURE](state, { error }) {
    return state.set('error', error);
  },
  [INCREMENT](state) {
    return state.update('count', increment);
  },
  [LOAD_DATA_SUCCESS](state, action) {
    return state.merge({ placeholderData: action.data });
  },
  [TICK_CLOCK](state, action) {
    return state.set('lastUpdate', action.ts).set('light', !!action.light);
  },
});

export default appReducer;
