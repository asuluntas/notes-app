import produce from 'immer';

import notesReducer from '../reducer';
import { loadNotes, notesLoaded, notesLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('notesReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      notes: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(notesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadNotes action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.notes = false;
    });

    expect(notesReducer(state, loadNotes())).toEqual(expectedResult);
  });

  it('should handle the notesLoaded action correctly', () => {
    const fixture = [
      {
        id: 3,
        text: 'a test note',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.notes = fixture;
    });

    expect(notesReducer(state, notesLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the notesLoadingError action correctly', () => {
    const fixture = {
      msg: 'Something went wrong, please try again!',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(notesReducer(state, notesLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
