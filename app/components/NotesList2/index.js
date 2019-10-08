import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { loadNotes } from '../../containers/App/actions';

class NotesList2 extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    if (this.props.loading) {
      return <List component={LoadingIndicator} />;
    }

    if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem item="Something went wrong, please try again!" />
      );
      return <List component={ErrorComponent} />;
    }

    if (this.props.notes !== false) {
      return <List items={this.props.notes} component={ListItem} />;
    }

    return null;
  }
}

NotesList2.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  notes: PropTypes.any,
  onComponentDidMount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadNotes: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log('dispatch load notes');
      dispatch(loadNotes());
    },
  };
}

const withConnect = connect(mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(NotesList2);
