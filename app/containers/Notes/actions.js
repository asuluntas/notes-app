import { LOAD_NOTES, LOAD_NOTES_SUCCESS, LOAD_NOTES_ERROR } from './constants';

export function loadNotes() {
  return {
    type: LOAD_NOTES,
  };
}

export function notesLoaded(notes) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes,
  };
}

export function notesLoadingError(error) {
  return {
    type: LOAD_NOTES_ERROR,
    error,
  };
}
