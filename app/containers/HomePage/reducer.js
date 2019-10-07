import produce from 'immer';
import { CHANGE_NOTE } from './constants';
import { ADD_NOTE_SUCCESS } from '../App/constants';

export const initialState = {
  note: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NOTE:
        draft.note = action.note;
        break;
      case ADD_NOTE_SUCCESS:
        draft.note = '';
        break;
    }
  });

export default homeReducer;
