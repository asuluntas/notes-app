import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <Img src={Banner} alt="react-boilerplate - Logo" />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/notes">
          <FormattedMessage {...messages.notes} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
