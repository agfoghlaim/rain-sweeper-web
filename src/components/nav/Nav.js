import React from 'react';
import { Link } from 'gatsby';
import classes from './nav.module.scss';

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
