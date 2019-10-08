import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
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
import reducer from './reducer';
import saga from './saga';
import AddNoteFeedback from '../../components/AddNoteFeedback';

const key = 'home';

export function HomePage({
  note,
  loadingAddNote,
  addNoteError,
  recentlyAddedNote,
  onSubmitForm,
  onChangeNote,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const addNoteFeedbackProps = {
    loadingAddNote,
    addNoteError,
    recentlyAddedNote,
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
            <label>
              <FormattedMessage {...messages.text} />
              <Input
                id="note"
                type="text"
                required
                minlength="1"
                placeholder="write something..."
                value={note}
                onChange={onChangeNote}
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
      console.log('dispatch addNote');
      dispatch(addNote(evt.target.value));
      // if (evt.target.value === '') {
      //   console.log("empty note");
      //   dispatch(emptyNote());
      // } else {
      //   console.log('value', evt.target.value);
      //   dispatch(addNote(evt.target.value));
      // }
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
