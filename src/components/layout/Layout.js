import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import classes from './layout.module.scss';
import 'normalize.css';
import '../../styles/global.scss';
import '../../styles/typography.scss';

import Nav from '../nav/Nav';

function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <header>
        <Nav />
      </header>
      <>{children}</>
      <footer>{new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
