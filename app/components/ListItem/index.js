import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <Wrapper>
      <Item key={props.item.id}>{props.item.text}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
