import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import classes from './about.module.scss';

function AboutPage({ data }) {
  return (
    <>
      <SEO pageTitle="About" />
      <main className={classes.aboutMain}>
        <h1>About Galway RainSweeper</h1>
        <p style={{ color: 'var(--white)', fontFamily: 'monospace' }}>
          <em>Galway RainSweeper</em> is something like <em>Minesweeper</em>{' '}
          except instead of mines there are rainy days and instead of flags
          there are umbrellas. The game uses real Met Éireann data taken from
          Athenry weather station.
        </p>
        <p style={{ color: 'var(--white)', fontFamily: 'monospace' }}>
          You get three spare umbrellas for every game, these open automatically
          if you choose a rainy day.
        </p>
        <p style={{ color: 'var(--white)', fontFamily: 'monospace' }}>
          You can add/remove your own umbrellas by right clicking or pressing
          spacebar. The more rounds you clear the more spare umbrellas you can
          collect.
        </p>
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
export default AboutPage;