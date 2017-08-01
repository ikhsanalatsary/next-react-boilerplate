import { fromJS } from 'immutable';
import { FAILURE, INCREMENT, LOAD_DATA_SUCCESS, TICK_CLOCK } from './constants';

export const GlobalState = fromJS({
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: [],
});

const increment = (v) => v + 1;

function rootReducer(state = GlobalState, action) {
  switch (action.type) {
    case FAILURE:
      return state.set('error', action.error);

    case INCREMENT:
      return state.update('count', increment);

    case LOAD_DATA_SUCCESS:
      return state.set('placeholderData', action.data);

    case TICK_CLOCK:
      return state
        .set('lastUpdate', action.ts)
        .set('light', !!action.light);

    default:
      return state;
  }
}

export default rootReducer;
