import { put, takeLatest } from 'redux-saga/effects';
import { emptyNoteAdding, noteAddingError } from './actions';
import { EMPTY_NOTE } from './constants';

export function* emptyNote() {
  try {
    yield put(emptyNoteAdding());
  } catch (err) {
    console.log(err);
    yield put(noteAddingError(err));
  }
}

export default function* watchEmptyNote() {
  yield takeLatest(EMPTY_NOTE, emptyNote);
}
