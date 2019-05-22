import React from 'react';
import PropTypes from 'prop-types';

import { getWolframCAArray } from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';

const WolframArray = ({ value, width, height }) => {
  const isNumberValid = value > 0 && value < 256;

  return isNumberValid ? (
    <div className={styles.table}>
      {getWolframCAArray(value, width, height).map((object, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.row} key={index}>
          {object.map((o, objectIndex) => (
            <div
              className={`${styles.cell} ${o === 1 ? styles.one : ''}`}
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}-${objectIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  ) : (
    <h4 className={styles.notFound}>Invalid number.</h4>
  );
};

WolframArray.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default WolframArray;
