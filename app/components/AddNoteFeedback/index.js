import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import Feedback from './Feedback';

function AddNoteFeedback({ loadingAddNote, addNoteError, recentlyAddedNote }) {
  if (loadingAddNote) {
    return (
      <div>
        <LoadingIndicator />
        <span>Saving your note!</span>
      </div>
    );
  }

  if (addNoteError !== false) {
    return (
      <Feedback>
        <div>Something went wrong, please try again!</div>
      </Feedback>
    );
  }

  if (recentlyAddedNote !== null && recentlyAddedNote.text.length > 0) {
    return (
      <Feedback color="green">
        <div>
          &quot;{recentlyAddedNote.text}&quot; successfully added to your notes!
        </div>
      </Feedback>
    );
  }

  return null;
}

AddNoteFeedback.propTypes = {
  loadingAddNote: PropTypes.bool,
  addNoteError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  recentlyAddedNote: PropTypes.object,
};

export default AddNoteFeedback;
