import React from 'react';
import { graphql } from 'gatsby';
import classes from './index.module.scss';

import SEO from '../components/SEO';
import Board from '../components/sweeper/Board';
import GameDets from '../components/gameDets/GameDets';

function IndexPage({ data }) {
  return (
    <>
      <SEO pageTitle="Home" />
      <main className={classes.homeMain}>
        <GameDets />
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
