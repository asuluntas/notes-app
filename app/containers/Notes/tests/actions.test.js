import { LOAD_NOTES, LOAD_NOTES_SUCCESS, LOAD_NOTES_ERROR } from '../constants';

import { loadNotes, notesLoaded, notesLoadingError } from '../actions';

describe('Notes Actions', () => {
  describe('loadNotes', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_NOTES,
      };

      expect(loadNotes()).toEqual(expectedResult);
    });
  });

  describe('notesLoaded', () => {
    it('should return the correct type and the passed notes', () => {
      const fixture = [{ id: 'test1', text: 'test2' }];
      const expectedResult = {
        type: LOAD_NOTES_SUCCESS,
        notes: fixture,
      };

      expect(notesLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('notesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong, please try again!',
      };
      const expectedResult = {
        type: LOAD_NOTES_ERROR,
        error: fixture,
      };

      expect(notesLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
