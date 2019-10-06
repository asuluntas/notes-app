/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_ERROR,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentNote: false,
  notes: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_NOTES:
        draft.loading = true;
        draft.error = false;
        draft.notes = false;
        break;

      case LOAD_NOTES_SUCCESS:
        draft.notes = action.notes;
        draft.loading = false;
        draft.currentNote = action.note;
        break;

      case LOAD_NOTES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_NOTE:
        draft.loading = true;
        draft.error = false;
        draft.currentNote = action.note;
        break;

      case ADD_NOTE_SUCCESS:
        draft.loading = false;
        draft.currentNote = action.note;
        break;

      case ADD_NOTE_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
