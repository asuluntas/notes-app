import { put, takeEvery } from 'redux-saga/effects';

import { ADD_NOTE } from '../constants';
import { noteAdded, noteAddingError } from '../actions';

import watchAddNotes, { addNote } from '../saga';

const note = 'a test note';

/* eslint-disable redux-saga/yield-effects */
describe('addNote Saga', () => {
  let addNoteGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    addNoteGenerator = addNote();

    const selectDescriptor = addNoteGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addNoteGenerator.next(note).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the noteAdded action if it requests the data successfully', () => {
    const response = {
      id: 3,
      text: 'a test note',
    };
    const putDescriptor = addNoteGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(noteAdded(response.text)));
  });

  it('should call the noteAddingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addNoteGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(noteAddingError(response)));
  });
});

describe('watchAddNotesSaga Saga', () => {
  const watchAddNotesSaga = watchAddNotes();

  it('should start task to watch for ADD_NOTE action', () => {
    const takeLatestDescriptor = watchAddNotesSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(ADD_NOTE, addNote));
  });
});
