import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { notesLoaded, notesLoadingError } from './actions';
import { LOAD_NOTES } from './constants';

export function* getNotes() {
  const requestURL = '/fetchNotes';
  try {
    const notes = yield call(request, requestURL);
    yield put(notesLoaded(notes));
  } catch (err) {
    yield put(notesLoadingError(err));
  }
}

export default function* watchLoadNotes() {
  yield takeLatest(LOAD_NOTES, getNotes);
}
