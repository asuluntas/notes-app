import produce from 'immer';
import { CHANGE_NOTE } from './constants';
import { ADD_NOTE_SUCCESS, ADD_NOTE, ADD_NOTE_ERROR } from '../App/constants';

export const initialState = {
  note: '',
  loadingAddNote: false,
  addNoteError: false,
  recentlyAddedNote: '',
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
        draft.recentlyAddedNote = '';
        break;
      case ADD_NOTE_SUCCESS:
        draft.loadingAddNote = false;
        draft.note = '';
        draft.recentlyAddedNote = action.note;
        break;
      case ADD_NOTE_ERROR:
        draft.loadingAddNote = false;
        draft.addNoteError = true;
    }
  });

export default homeReducer;
