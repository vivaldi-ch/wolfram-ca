import React from 'react';
import PropTypes from 'prop-types';

import { getWolframCAArray } from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';

const WolframArray = ({ value, width, height }) => (
  <div className={styles.table}>
    {getWolframCAArray(value, width, height).map(object => (
      <div className={styles.row}>
        {object.map(o => (
          <div className={`${styles.cell} ${o === 1 ? styles.one : ''}`} />
        ))}
      </div>
    ))}
  </div>
);

WolframArray.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default WolframArray;
