import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentNote = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentNote,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectNotes = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notes,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentNote,
  makeSelectLoading,
  makeSelectError,
  makeSelectNotes,
  makeSelectLocation,
};
