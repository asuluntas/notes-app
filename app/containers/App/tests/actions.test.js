import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

import { loadRepos, reposLoaded, repoLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STRINGS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_STRINGS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STRINGS_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
