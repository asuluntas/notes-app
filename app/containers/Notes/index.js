import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectNotes,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import NotesList from 'components/NotesList';
import H1 from 'components/H1';
// import { loadNotes } from '../App/actions';
import saga from './saga';
// import { loadNotes } from '../App/actions';
import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

const key = 'notes';

export function Notes({ loading, error, notes }) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const notesListProps = {
    loading,
    error,
    notes,
  };

  return (
    <div>
      <Helmet>
        <title>Notes</title>
        <meta
          name="description"
          content="Notes page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <NotesList {...notesListProps} />
      {/* <List>
        <ListItem>
          <ListItemTitle>

          </ListItemTitle>
        </ListItem>
      </List> */}
    </div>
  );
}

Notes.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  notes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// export function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadNotes());
//     },
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Notes);
