import { call, put, select, takeLatest } from 'redux-saga/effects';
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
    yield put(noteAdded(response));
  } catch (err) {
    yield put(noteAddingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAddNotes() {
  // Watches for LOAD_STRINGS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_NOTE, addNote);
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
