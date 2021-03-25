import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

import classes from './index.module.scss';


function IndexPage({ data }) {
  
  

  return (
    <>
      <SEO pageTitle="Home" />
      <main>
        {/* Gets data in live time on page load. See attractions.js/gatsby-node.js for buildtime data.*/}
        <div className={classes.weather}>

        </div>

        <div className={classes.fonts}>
          <p>{data.site.siteMetadata.title}</p>
          <small>{data.site.siteMetadata.description}</small>
          <p className="hMinus3">hMinus3</p>
          <p className="hMinus2">hMinus2</p>
          <p className="hMinus1">hMinus1</p>
          <p className="hZero">hZero</p>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5 </h5>
          <h6>h6</h6>
          <p>Paragraph.</p>
          <small>Small</small>
          <br />
          <button>Button</button>
        </div>


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
