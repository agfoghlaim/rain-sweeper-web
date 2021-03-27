import React from 'react';
import { graphql } from 'gatsby';
import classes from './index.module.scss';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Board from '../components/sweeper/Board';
import GameDets from '../components/gameDets/GameDets';

/**
 * Note on 'Skip to Game' link cause it's hacky.  
 * New Game button and tiles will ~never render at the same time
 * New Game button (see board.js) has the id "0", same as the first tile in the board
 * Skip to Game link therefore goes to "/#0", New Game button if game not loaded, first tile if game is loaded.
 */
function IndexPage({ data }) {

  return (
    <Layout skipToId={"#0"}>
      <SEO pageTitle="Home" />
      <main className={classes.homeMain}>
        <GameDets />
        <Board />
      </main>
    </Layout>
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
