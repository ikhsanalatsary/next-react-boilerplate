import { createSelector } from 'reselect';

export const selectState = () => (state) => state.get('global');

export const selectCount = () => createSelector(
  selectState(),
  (globalState) => globalState.get('count')
);

export const selectLight = () => createSelector(
  selectState(),
  (globalState) => globalState.get('light')
);

export const selectLastUpdate = () => createSelector(
  selectState(),
  (globalState) => globalState.get('lastUpdate')
);

export const selectPlaceholderData = () => createSelector(
  selectState(),
  (globalState) => globalState.get('placeholderData')
);

export const selectError = () => createSelector(
  selectState(),
  (globalState) => globalState.get('error')
);
