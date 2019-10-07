// import React from 'react';
// import PropTypes from 'prop-types';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';

// function AddNoteFeedback({ loading, error, notes }) {
//   console.log('Notes List notes', notes);
//   if (loading) {
//     return <List component={LoadingIndicator} />;
//   }

//   if (error !== false) {
//     const ErrorComponent = () => (
//       <ListItem item="Something went wrong, please try again!" />
//     );
//     return <List component={ErrorComponent} />;
//   }

//   if (notes !== false) {
//     return (
//       <div>
//         <List items={notes} component={ListItem} />
//         <span>successfully added to your notes!</span>
//       </div>
//     );
//   }

//   return null;
// }

// AddNoteFeedback.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.any,
//   notes: PropTypes.any,
// };

// export default AddNoteFeedback;

// //////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import Success from './Success';
import Error from './Error';

function AddNoteFeedback({ loading, error, notes }) {
  if (loading) {
    return (
      <div>
        <LoadingIndicator />
        <span>Saving your note!</span>
      </div>
    );
  }

  if (error !== false) {
    return (
      <Error>
        <div>Something went wrong, please try again!</div>
      </Error>
    );
  }

  if (notes !== false && notes.length > 0) {
    return (
      <Success>
        <div>&quot;{notes}&quot; successfully added to your notes!</div>
      </Success>
    );
  }

  return null;
}

AddNoteFeedback.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  notes: PropTypes.any,
};

export default AddNoteFeedback;
