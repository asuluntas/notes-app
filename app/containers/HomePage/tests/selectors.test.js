import {
  selectHome,
  makeSelectNote,
  makeSelectLoadingAddNote,
  makeSelectAddNoteError,
  makeSelectRecentlyAddedNote,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectNote', () => {
  const noteSelector = makeSelectNote();
  it('should select the note', () => {
    const note = 'a test note';
    const mockedState = {
      home: {
        note,
      },
    };
    expect(noteSelector(mockedState)).toEqual(note);
  });
});

describe('makeSelectLoadingAddNote', () => {
  const loadingSelector = makeSelectLoadingAddNote();
  it('should select the loadingAddNote', () => {
    const loadingAddNote = false;
    const mockedState = {
      home: {
        loadingAddNote,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loadingAddNote);
  });
});

describe('makeSelectAddNoteError', () => {
  const errorSelector = makeSelectAddNoteError();
  it('should select the error', () => {
    const addNoteError = 404;
    const mockedState = {
      home: {
        addNoteError,
      },
    };
    expect(errorSelector(mockedState)).toEqual(addNoteError);
  });
});

describe('makeSelectRecentlyAddedNote', () => {
  const reposSelector = makeSelectRecentlyAddedNote();
  it('should select the recentlyAddedNote', () => {
    const recentlyAddedNote = null;
    const mockedState = {
      global: {
        recentlyAddedNote,
      },
    };
    expect(reposSelector(mockedState)).toEqual(recentlyAddedNote);
  });
});

// describe('makeSelectLocation', () => {
//   const locationStateSelector = makeSelectLocation();
//   it('should select the location', () => {
//     const router = {
//       location: { pathname: '/foo' },
//     };
//     const mockedState = {
//       router,
//     };
//     expect(locationStateSelector(mockedState)).toEqual(router.location);
//   });
// });
