import React from 'react';
import PropTypes from 'prop-types';
import isNumber from 'lodash/isNumber';

import styles from './wolfram-rep.module.css';

const decimalToBinary = (decimal) => {
  const binArray = [];

  if (!isNumber(decimal)) {
    return [];
  }

  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-bitwise
    binArray[i] = (decimal >> i) & 1; // reverse
  }

  return binArray.reverse();
};

const WolframRep = ({ wolframArr }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '1em',
    }}
  >
    {
      wolframArr.map((val, index) => {
        const valInArray = decimalToBinary(index);

        return (
          <div>
            <div className={styles.squareRowWrapper}>
              {valInArray.map(v => (
                <div
                  className={`${styles.square} ${
                    v === 0 ? styles.white : styles.black
                  }`}
                />
              ))}
            </div>
            <div className={styles.squareRowWrapper}>
              <div
                className={`${styles.square} ${
                  val === 0 ? styles.white : styles.black
                }`}
              />
            </div>
          </div>
        );
      })
    }
  </div>
);

WolframRep.propTypes = {
  wolframArr: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default WolframRep;
