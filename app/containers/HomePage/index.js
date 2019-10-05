// import React, { useEffect, memo } from 'react';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectNotes,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import NotesList from 'components/NotesList';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadNotes } from '../App/actions';
import { changeNote } from './actions';
import { makeSelectNote } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  note,
  loading,
  error,
  notes,
  onSubmitForm,
  onChangeNote,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load notes
  //   if (note && note.trim().length > 0) onSubmitForm();
  // }, []);

  const notesListProps = {
    loading,
    error,
    notes,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="note">
              <FormattedMessage {...messages.text} />
              <Input
                id="note"
                type="text"
                placeholder="write something..."
                value={note}
                onChange={onChangeNote}
              />
            </label>
          </Form>
          <NotesList {...notesListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  notes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  note: PropTypes.string,
  onChangeNote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  note: makeSelectNote(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNote: evt => dispatch(changeNote(evt.target.value)),
    onSubmitForm: evt => {
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
)(HomePage);
