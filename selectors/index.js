import { createSelector } from 'reselect';

export const selectState = () => (state) => state.global;

export const selectCount = () => createSelector(
  selectState(),
  (globalState) => globalState.count
);

export const selectLight = () => createSelector(
  selectState(),
  (globalState) => globalState.light
);

export const selectLastUpdate = () => createSelector(
  selectState(),
  (globalState) => globalState.lastUpdate
);

export const selectPlaceholderData = () => createSelector(
  selectState(),
  (globalState) => globalState.placeholderData
);

export const selectError = () => createSelector(
  selectState(),
  (globalState) => globalState.error
);
