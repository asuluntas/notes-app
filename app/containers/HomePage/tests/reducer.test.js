import produce from 'immer';

import homeReducer from '../reducer';
import { changeNote, addNote, noteAdded, noteAddingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      note: '',
      loadingAddNote: false,
      addNoteError: false,
      recentlyAddedNote: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeNote action correctly', () => {
    const fixture = 'a test note';
    const expectedResult = produce(state, draft => {
      draft.note = fixture;
    });

    expect(homeReducer(state, changeNote(fixture))).toEqual(expectedResult);
  });

  it('should handle the addNote action correctly', () => {
    const fixture = 'a test note';
    const expectedResult = produce(state, draft => {
      draft.loadingAddNote = true;
      draft.addNoteError = false;
      draft.recentlyAddedNote = null;
    });

    expect(homeReducer(state, addNote(fixture))).toEqual(expectedResult);
  });

  it('should handle the noteAdded action correctly', () => {
    // const fixture = 'a test note';
    const fixture = { id: 4, text: 'a test note' };
    const expectedResult = produce(state, draft => {
      draft.loadingAddNote = false;
      draft.note = '';
      draft.recentlyAddedNote = fixture.text;
    });

    expect(homeReducer(state, noteAdded(fixture))).toEqual(expectedResult);
  });

  it('should handle the noteAddingError action correctly', () => {
    const fixture = {
      msg: 'Something went wrong, please try again!',
    };
    const expectedResult = produce(state, draft => {
      draft.loadingAddNote = false;
      draft.addNoteError = true;
    });

    expect(homeReducer(state, noteAddingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
