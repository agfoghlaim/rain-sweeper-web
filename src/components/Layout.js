import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import classes from './layout.module.scss';
import 'normalize.css';
import '../styles/global.scss';
import '../styles/typography.scss';

import Nav from './Nav';

function Layout({ children }) {

  // via static query.
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <div className={classes.layout}>
      <Nav />
      <p>{data.site.siteMetadata.title}</p>
      <small>{data.site.siteMetadata.description}</small>
      <div>{children}</div>
      <footer>Footer {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
