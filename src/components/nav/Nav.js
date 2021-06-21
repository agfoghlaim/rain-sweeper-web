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
        <li className={classes.appLink}>
          <a title="Go to app page on Google Play." target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=ie.marie.irish_rain_sweeper">Get the App</a>{' '}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
