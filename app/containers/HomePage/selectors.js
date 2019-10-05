import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectNote = () =>
  createSelector(
    selectHome,
    homeState => homeState.note,
  );

export { selectHome, makeSelectNote };
