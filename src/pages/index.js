import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Board from '../components/sweeper/Board';
import classes from './index.module.scss';

function IndexPage({ data }) {
  return (
    <>
      <SEO pageTitle="Home" />
      <main className={classes.homeMain}>
        <Board />
      </main>
    </>
  );
}

// via page query
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
export default IndexPage;
