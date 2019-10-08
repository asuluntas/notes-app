import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNotes = state => state.notes || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectNotes,
    notesState => notesState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectNotes,
    notesState => notesState.error,
  );

const makeSelectNotes = () =>
  createSelector(
    selectNotes,
    notesState => notesState.notes,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectNotes,
  makeSelectLoading,
  makeSelectError,
  makeSelectNotes,
  makeSelectLocation,
};
