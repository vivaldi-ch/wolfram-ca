import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import random from 'lodash/random';

const WolframLink = ({ value }) => {
  const wolframIndex = Number(value);

  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '20px',
      }}
    >
      <Link
        to={wolframIndex <= 0 ? '/' : `/wolfram/${Math.min(wolframIndex - 1, 255)}`}
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
        to={wolframIndex >= 255 ? '/' : `/wolfram/${Math.max(wolframIndex + 1, 1)}`}
        style={{
          visibility: wolframIndex >= 255 ? 'hidden' : 'visible',
        }}
      >
        <button type="button">&gt;</button>
      </Link>
    </div>
  );
};

WolframLink.defaultProps = {
  value: '0',
};

WolframLink.propTypes = {
  value: PropTypes.string,
};

export default WolframLink;
