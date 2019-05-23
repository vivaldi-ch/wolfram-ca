import React from 'react';
import PropTypes from 'prop-types';

import { getWolframCAArray } from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';

const WolframArray = ({ value, width, height }) => {
  const isNumberValid = value > 0 && value < 256;

  const wolframHTML = isNumberValid ? (
    <div className={styles.table}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="765"
        height="7500"
        viewBox="0 0 765 7500"
      >
        {getWolframCAArray(value, width, height).map((object, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <g id={index} key={index}>
            {object.map((o, objectIndex) => (
              <rect
                // eslint-disable-next-line react/no-array-index-key
                key={`${index}-${objectIndex}`}
                x={(objectIndex * 15).toString()}
                y={(index * 15).toString()}
                width="15"
                height="15"
                fill={o === 1 ? '#000000' : '#ffffff'}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  ) : (
    <h4 className={styles.notFound}>Invalid number.</h4>
  );

  return wolframHTML;
};

WolframArray.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default WolframArray;
