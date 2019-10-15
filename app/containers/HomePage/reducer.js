import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  CHANGE_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE,
  ADD_NOTE_ERROR,
} from './constants';

export const initialState = {
  note: '',
  loadingAddNote: false,
  addNoteError: false,
  recentlyAddedNote: null,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NOTE:
        draft.note = action.note;
        break;
      case ADD_NOTE:
        draft.loadingAddNote = true;
        draft.addNoteError = false;
        draft.recentlyAddedNote = null;
        // draft.note = action.note;
        break;
      case ADD_NOTE_SUCCESS:
        draft.loadingAddNote = false;
        draft.note = '';
        draft.recentlyAddedNote = action.note.text;
        break;
      case ADD_NOTE_ERROR:
        draft.loadingAddNote = false;
        draft.addNoteError = true;
        break;
      case LOCATION_CHANGE:
        draft.loadingAddNote = false;
        draft.addNoteError = false;
        draft.recentlyAddedNote = null;
        break;
    }
  });

export default homeReducer;
