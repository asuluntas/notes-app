import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_ERROR,
} from '../Notes/constants';

import {
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
} from '../HomePage/constants';

export function loadNotes() {
  return {
    type: LOAD_NOTES,
  };
}

export function notesLoaded(notes, note) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes,
    note,
  };
}

export function notesLoadingError(error) {
  return {
    type: LOAD_NOTES_ERROR,
    error,
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note,
  };
}

export function noteAdded(note) {
  return {
    type: ADD_NOTE_SUCCESS,
    note,
  };
}

export function noteAddingError(error) {
  return {
    type: ADD_NOTE_ERROR,
    error,
  };
}
