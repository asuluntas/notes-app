import { CHANGE_NOTE } from './constants';

export function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    note,
  };
}
