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
import NotesList2 from 'components/NotesList2';
import H1 from 'components/H1';
import { loadNotes } from '../App/actions';
import saga from './saga';
import messages from './messages';

const key = 'notes';

export function Notes({ loading, error, notes, onLoadNotes }) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
          content="Notes page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <NotesList2 {...notesListProps} />
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
  notes: makeSelectNotes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
