import Immutable from 'seamless-immutable';
import { FAILURE, INCREMENT, LOAD_DATA_SUCCESS, TICK_CLOCK } from '../constants/appConstant';

export const GlobalState = Immutable({
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: [],
});

const increment = (count) => count + 1;

function appReducer(state = GlobalState, action) {
  switch (action.type) {
    case FAILURE:
      return state.set('error', action.error);

    case INCREMENT:
      return state.update('count', increment);

    case LOAD_DATA_SUCCESS:
      return state.merge({ placeholderData: action.data });

    case TICK_CLOCK:
      return state.set('lastUpdate', action.ts).set('light', !!action.light);

    default:
      return state;
  }
}

export default appReducer;
