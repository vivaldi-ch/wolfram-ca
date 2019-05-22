import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import random from 'lodash/random';

const WolframLink = ({ value }) => {
  const wolframIndex = Number(value) || 0;

  return (
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
  );
};

WolframLink.propTypes = {
  value: PropTypes.string.isRequired,
};

export default WolframLink;
