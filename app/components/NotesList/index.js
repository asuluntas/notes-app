import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function NotesList({ loading, error, notes }) {
  console.log('Notes List notes', notes);
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (notes !== false) {
    return <List items={notes} component={ListItem} />;
  }

  return null;
}

NotesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  notes: PropTypes.any,
};

export default NotesList;
