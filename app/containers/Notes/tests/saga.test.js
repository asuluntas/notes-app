import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_NOTES } from '../constants';
import { notesLoaded, notesLoadingError } from '../actions';

import watchLoadNotes, { getNotes } from '../saga';

const note = 'a test note';

/* eslint-disable redux-saga/yield-effects */
describe('getNotes Saga', () => {
  let getNotesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getNotesGenerator = getNotes();

    const selectDescriptor = getNotesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getNotesGenerator.next(note).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the notesLoaded action if it requests the data successfully', () => {
    const response = [
      {
        id: 3,
        text: 'a test note1',
      },
      {
        id: 4,
        text: 'a test note2',
      },
    ];
    const putDescriptor = getNotesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(notesLoaded(response)));
  });

  it('should call the notesLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getNotesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(notesLoadingError(response)));
  });
});

describe('watchLoadNotesSaga Saga', () => {
  const watchLoadNotesSaga = watchLoadNotes();

  it('should start task to watch for LOAD_NOTES action', () => {
    const takeLatestDescriptor = watchLoadNotesSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_NOTES, getNotes));
  });
});
