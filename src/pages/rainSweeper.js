import React from 'react';

// import classes from './rainSweeper.module.scss';

import SEO from '../components/SEO';
import Board from '../components/sweeper/Board';

export default function RainSweeperPage({ data }) {
  return (
    <>
      <SEO pageTitle="RainSweeperPage" />

      <main>
        <h1>
          RainSweeper
          <span>Data from Athenry weather station</span>
        </h1>
        <Board  />
     
      </main>
    </>
  );
}
