import produce from 'immer';
import { LOAD_NOTES, LOAD_NOTES_SUCCESS, LOAD_NOTES_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  notes: false,
};

/* eslint-disable default-case, no-param-reassign */
const notesReducer = (state = initialState, action) =>
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
        break;

      case LOAD_NOTES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default notesReducer;
