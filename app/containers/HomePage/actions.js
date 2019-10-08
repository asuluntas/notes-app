import {
  CHANGE_NOTE,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
} from './constants';

export function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    note,
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
