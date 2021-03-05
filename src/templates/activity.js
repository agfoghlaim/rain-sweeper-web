import React from 'react';
import SEO from '../components/SEO';

export default function Activity(props) {
  const attractions = props.pageContext.attractions;
  return (
    <>
      <SEO pageTitle={attractions.name} image={attractions.image?.url} />
      <h1>{attractions.name}</h1>
      <img src={attractions.image.url} alt={attractions.image.caption} />
      <p>
        {attractions.url ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={attractions.url}
            title={attractions.name}
          ></a>
        ) : (
          attractions.name
        )}
      </p>
      <p>{attractions.name}</p>
      <p>
        <span role="img" aria-hidden="true">
          🗺️
        </span>
        {attractions.geo.latitude}, {attractions.geo.longitude}
      </p>
    </>
  );
}
