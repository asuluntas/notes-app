import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

export default function Notes() {
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
      {/* <List>
        <ListItem>
          <ListItemTitle>

          </ListItemTitle>
        </ListItem>
      </List> */}
    </div>
  );
}
