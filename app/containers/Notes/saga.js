import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectNote } from 'containers/HomePage/selectors';
import request from 'utils/request';
import { notesLoaded, notesLoadingError } from './actions';
import { LOAD_NOTES } from './constants';

export function* getNotes() {
  const note = yield select(makeSelectNote());
  const requestURL = '/fetchNotes';

  try {
    const notes = yield call(request, requestURL);
    console.log('notes', notes);
    yield put(notesLoaded(notes, note));
  } catch (err) {
    yield put(notesLoadingError(err));
  }
}

export default function* watchLoadNotes() {
  yield takeEvery(LOAD_NOTES, getNotes);
}
