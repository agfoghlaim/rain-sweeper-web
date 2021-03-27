import React from 'react';
import classes from './nav.module.scss';

import { Link } from 'gatsby';

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
        <li>
          <Link to="/about">About</Link>{' '}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
