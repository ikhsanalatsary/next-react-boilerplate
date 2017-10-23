import { createSelector } from 'reselect';

export const selectState = () => (state) => state.app;

export const selectCount = () =>
  createSelector(selectState(), (appState) => appState.count);

export const selectLight = () =>
  createSelector(selectState(), (appState) => appState.light);

export const selectLastUpdate = () =>
  createSelector(selectState(), (appState) => appState.lastUpdate);

export const selectPlaceholderData = () =>
  createSelector(selectState(), (appState) => appState.placeholderData);

export const selectError = () =>
  createSelector(selectState(), (appState) => appState.error);
