import {
  selectNotes,
  makeSelectLoading,
  makeSelectError,
  makeSelectNotes,
} from '../selectors';

describe('selectNotes', () => {
  it('should select the notes state', () => {
    const notesState = {};
    const mockedState = {
      notes: notesState,
    };
    expect(selectNotes(mockedState)).toEqual(notesState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      notes: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      notes: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectNotes', () => {
  const reposSelector = makeSelectNotes();
  it('should select the notes', () => {
    const notes = [];
    const mockedState = {
      notes: {
        notes,
      },
    };
    expect(reposSelector(mockedState)).toEqual(notes);
  });
});
