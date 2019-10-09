import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NotesList from 'components/NotesList';
import H1 from 'components/H1';
import {
  makeSelectNotes,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadNotes } from './actions';
import messages from './messages';

export function Notes({ loading, error, notes, onLoadNotes }) {
  const notesListProps = {
    loading,
    error,
    notes,
    onComponentDidMount: onLoadNotes,
  };

  return (
    <div>
      <Helmet>
        <title>Notes</title>
        <meta
          name="description"
          content="Note list page of Notes application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <NotesList {...notesListProps} />
    </div>
  );
}

Notes.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  notes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadNotes: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  notes: makeSelectNotes(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadNotes: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadNotes());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Notes);
