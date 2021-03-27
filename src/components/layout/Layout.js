import React from 'react';

import classes from './layout.module.scss';
import 'normalize.css';
import '../../styles/global.scss';
import '../../styles/typography.scss';

import Nav from '../nav/Nav';
import Logo from '../logo/Logo';

function Layout({ children, skipToId }) {
  return (
    <div className={classes.layout}>
      <header>
        {skipToId && (
          <a className={classes.skipLink} href={skipToId}>
            skip to game
          </a>
        )}

        <Logo />
        <Nav />
      </header>
      <>{children}</>
      <footer>{new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
