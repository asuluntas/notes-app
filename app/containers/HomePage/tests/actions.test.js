import {
  CHANGE_NOTE,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
} from '../constants';

import { changeNote, addNote, noteAdded, noteAddingError } from '../actions';

describe('Home Actions', () => {
  describe('changeNote', () => {
    it('should return the correct type and the passed note', () => {
      const fixture = 'a test note';
      const expectedResult = {
        type: CHANGE_NOTE,
        note: fixture,
      };

      expect(changeNote(fixture)).toEqual(expectedResult);
    });
  });

  describe('addNote', () => {
    it('should return the correct type and the passed note', () => {
      const fixture = 'a test note';
      const expectedResult = {
        type: ADD_NOTE,
        note: fixture,
      };

      expect(addNote(fixture)).toEqual(expectedResult);
    });
  });

  describe('noteAdded', () => {
    it('should return the correct type and the passed note', () => {
      const fixture = 'a test note';
      const expectedResult = {
        type: ADD_NOTE_SUCCESS,
        note: fixture,
      };

      expect(noteAdded(fixture)).toEqual(expectedResult);
    });
  });

  describe('noteAddingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong, please try again!',
      };
      const expectedResult = {
        type: ADD_NOTE_ERROR,
        error: fixture,
      };

      expect(noteAddingError(fixture)).toEqual(expectedResult);
    });
  });
});
