/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_NOTES } from 'containers/App/constants';
import { notesLoaded, notesLoadingError } from 'containers/App/actions';
import { makeSelectNote } from 'containers/HomePage/selectors';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getNotes() {
  const note = yield select(makeSelectNote());
  const requestURL = '/fetchMessages';

  try {
    // Call our request helper (see 'utils/request')
    const notes = yield call(request, requestURL);
    console.log('notes', notes);
    // yield put(notesLoaded(repos, 'asuluntas'));
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
  yield takeLatest(LOAD_NOTES, getNotes);
}

// import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { messageAdded, messageAddingError } from 'containers/App/actions';

// import request from 'utils/request';
// import { makeSelectMessage } from './selectors';

// import { ADD_MESSAGE } from '../App/constants';

// export function* submitForm() {
//   // console.log('received dispatched add message');
//   const body = yield select(makeSelectMessage());
//   console.log('selected body', body);
//   const requestURL = '/addMessage';
//   const requestOptions = {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   try {
//     const response = yield call(request, requestURL, requestOptions);
//     console.log('response', response);
//     console.log('success');
//     yield put(messageAdded(response));
//   } catch (err) {
//     console.log('fail');
//     yield put(messageAddingError(err));
//   }
// }

// export default function* watchAddMessage() {
//   yield takeLatest(ADD_MESSAGE, submitForm);
// }
