import React from 'react';

import classes from './layout.module.scss';
import 'normalize.css';
import '../../styles/global.scss';
import '../../styles/typography.scss';

import Nav from '../nav/Nav';
import Logo from '../logo/Logo';
function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <header>
        <Logo />
        <Nav />
      </header>
      <>{children}</>
      <footer>{new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
