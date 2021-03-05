import React from 'react';
import { graphql, Link } from 'gatsby';

import classes from './attractions.module.scss';

import SEO from '../components/SEO';

export default function Attractions({ data }) {
  return (
    <>
      <SEO pageTitle="Attractions" />
      <h1>All Attractions ({data.allAttraction.nodes.length})</h1>
      <small style={{ color: 'var(--red)', marginBottom: '1rem' }}>
        Attractions data fetched at build time.
      </small>
      <div className={classes.attractions}>
        {data.allAttraction.nodes.map((attraction) => {
          return (
            <div key={attraction.id}>
              <Link to={`/attraction/${attraction.slug}`}>
                <h2 className="h5">{attraction.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const queryAttractions = graphql`
  query {
    allAttraction {
      nodes {
        slug
        url
        telephone
        tags
        name
        id
        _type
        address {
          _type
          addressCountry
          addressLocality
          addressRegion
        }
      }
    }
  }
`;
