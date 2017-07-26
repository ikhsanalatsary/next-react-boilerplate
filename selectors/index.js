import { createSelector } from 'reselect';

export const selectState = () => (state) => state;

export const selectCount = () => createSelector(
  selectState(),
  (subState) => subState.count
);

export const selectLight = () => createSelector(
  selectState(),
  (subState) => subState.light
);

export const selectLastUpdate = () => createSelector(
  selectState(),
  (subState) => subState.lastUpdate
);

export const selectPlaceholderData = () => createSelector(
  selectState(),
  (subState) => subState.placeholderData
);

export const selectError = () => createSelector(
  selectState(),
  (subState) => subState.error
);
