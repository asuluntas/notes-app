import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNotes = state => state.notes || initialState;

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

export { selectNotes, makeSelectLoading, makeSelectError, makeSelectNotes };
