import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import WolframCA from '../components/wolfram-ca';

const WolframTemplate = ({ pageContext }) => {
  const { index: wolframIndex } = pageContext;

  return (
    <Layout>
      <SEO title={`Wolfram ${wolframIndex}`} />
      <div
        style={{
          textAlign: 'center',
          paddingTop: '20px',
        }}
      >
        <Link
          to={wolframIndex <= 0 ? '/' : `/wolfram/${wolframIndex - 1}`}
          style={{
            visibility: wolframIndex <= 0 ? 'hidden' : 'visible',
          }}
        >
          <button type="button">&lt;</button>
        </Link>
        <Link
          style={{
            margin: '0 10px',
          }}
          to={`/wolfram/${random(1, 255)}`}
        >
          <button type="button">Random</button>
        </Link>
        <Link
          to={wolframIndex >= 255 ? '/' : `/wolfram/${wolframIndex + 1}`}
          style={{
            visibility: wolframIndex >= 255 ? 'hidden' : 'visible',
          }}
        >
          <button type="button">&gt;</button>
        </Link>
      </div>
      <WolframCA value={wolframIndex} />
    </Layout>
  );
};

WolframTemplate.propTypes = {
  pageContext: PropTypes.shape({
    pageContext: PropTypes.shape({
      index: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WolframTemplate;