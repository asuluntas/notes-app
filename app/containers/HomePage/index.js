import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import H2 from 'components/H2';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { changeNote, addNote } from './actions';
import {
  makeSelectNote,
  makeSelectLoadingAddNote,
  makeSelectAddNoteError,
  makeSelectRecentlyAddedNote,
} from './selectors';
import AddNoteFeedback from '../../components/AddNoteFeedback';

export function HomePage({
  note,
  loadingAddNote,
  addNoteError,
  recentlyAddedNote,
  onSubmitForm,
  onChangeNote,
}) {
  const addNoteFeedbackProps = {
    loadingAddNote,
    addNoteError,
    recentlyAddedNote,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Notes application homepage" />
      </Helmet>
      <div>
        <Section>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label>
              <FormattedMessage {...messages.text} />
              <Input
                id="note"
                type="text"
                required
                minlength="1"
                placeholder="write something..."
                onChange={onChangeNote}
                value={note}
              />
            </label>
          </Form>
          <AddNoteFeedback {...addNoteFeedbackProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  note: PropTypes.string,
  loadingAddNote: PropTypes.bool,
  addNoteError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  recentlyAddedNote: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeNote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  note: makeSelectNote(),
  loadingAddNote: makeSelectLoadingAddNote(),
  addNoteError: makeSelectAddNoteError(),
  recentlyAddedNote: makeSelectRecentlyAddedNote(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNote: evt => dispatch(changeNote(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      if (evt.target !== undefined) {
        dispatch(addNote(evt.target.querySelector('#note').value));
      }
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
