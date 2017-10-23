import { combineReducers } from 'redux';

import appReducer from '../reducers/appReducer';

export default () => {
  const rootReducer = combineReducers({
    app: appReducer,
  });

  return rootReducer;
}
