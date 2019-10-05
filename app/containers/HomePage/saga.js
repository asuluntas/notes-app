/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store

  const requestURL = `/fetchMessages`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, 'asuluntas'));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_STRINGS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, getRepos);
}
