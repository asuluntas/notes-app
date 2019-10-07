import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectNote = () =>
  createSelector(
    selectHome,
    homeState => homeState.note,
  );

const makeSelectLoadingAddNote = () =>
  createSelector(
    selectHome,
    homeState => homeState.loadingAddNote,
  );

const makeSelectAddNoteError = () =>
  createSelector(
    selectHome,
    homeState => homeState.addNoteError,
  );

const makeSelectRecentlyAddedNote = () =>
  createSelector(
    selectHome,
    homeState => homeState.recentlyAddedNote,
  );

export {
  selectHome,
  makeSelectNote,
  makeSelectLoadingAddNote,
  makeSelectAddNoteError,
  makeSelectRecentlyAddedNote,
};
