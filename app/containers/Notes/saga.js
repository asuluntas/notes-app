import { call, put, select, takeEvery } from 'redux-saga/effects';
import { notesLoaded, notesLoadingError } from 'containers/App/actions';
import { makeSelectNote } from 'containers/HomePage/selectors';
import request from 'utils/request';
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

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoadNotes() {
  // Watches for LOAD_STRINGS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery(LOAD_NOTES, getNotes);
}
