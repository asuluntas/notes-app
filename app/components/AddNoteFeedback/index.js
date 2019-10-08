import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import Success from './Success';
import Error from './Error';

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
      <Error>
        <div>Something went wrong, please try again!</div>
      </Error>
    );
  }

  if (recentlyAddedNote !== null && recentlyAddedNote.text.length > 0) {
    return (
      <Success>
        <div>
          &quot;{recentlyAddedNote.text}&quot; successfully added to your notes!
        </div>
      </Success>
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
