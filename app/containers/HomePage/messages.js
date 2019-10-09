import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Write a Note!',
  },
  text: {
    id: `${scope}.text`,
    defaultMessage: 'Your Note here ',
  },
});
