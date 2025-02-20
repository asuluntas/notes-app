import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectNote } from 'containers/HomePage/selectors';
import request from 'utils/request';
import { noteAdded, noteAddingError } from './actions';
import { ADD_NOTE } from './constants';

export function* addNote() {
  const note = yield select(makeSelectNote());
  const requestURL = '/addNote';

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: note }),
    });
    yield put(noteAdded(response.text));
  } catch (err) {
    yield put(noteAddingError(err));
  }
}

export default function* watchAddNotes() {
  yield takeEvery(ADD_NOTE, addNote);
}
