import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Feedback from 'components/AddNoteFeedback/Feedback';

import { compose } from 'redux';

class NotesList extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    if (this.props.loading) {
      return <List component={LoadingIndicator} />;
    }

    if (this.props.error !== false) {
      return (
        <Feedback>
          <div>Something went wrong, please try again!</div>
        </Feedback>
      );
    }

    if (this.props.notes !== false) {
      return <List items={this.props.notes} component={ListItem} />;
    }

    return null;
  }
}

NotesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  notes: PropTypes.any,
  onComponentDidMount: PropTypes.func,
};

export default compose()(NotesList);
