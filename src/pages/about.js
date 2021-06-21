import React from 'react';
import { graphql } from 'gatsby';
import classes from './about.module.scss';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
function AboutPage({ data }) {
  return (
    <Layout>
      <SEO pageTitle="About" />

      <main className={classes.aboutMain}>
        <h1>About Galway RainSweeper</h1>
        <p style={{ color: 'var(--white)', fontFamily: 'monospace' }}>
          <em>Galway RainSweeper</em> is something like <em>Minesweeper</em>{' '}
          except instead of mines there are rainy days and instead of flags
          there are umbrellas. The game uses real Met Éireann data taken from
          Athenry weather station.{' '}
          <a
            href="https://play.google.com/store/apps/details?id=ie.marie.irish_rain_sweeper"
            target="_blank"
            rel="noreferrer noopener"
            title="Go to the app page on Google Play."
          >
            Get the app
          </a>{' '}
          to play the 24 other weather stations.
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
export default AboutPage;
