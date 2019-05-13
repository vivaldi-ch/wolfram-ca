import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { decimalToBinary } from '../../utils/wolfram';

import styles from './wolfram-rep.module.css';

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
        const valInArray = decimalToBinary(index, 3).map(binaryVal => ({
          id: uuid(),
          binaryVal,
        }));

        return (
          // static array
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div className={styles.squareRowWrapper}>
              {valInArray.map(v => (
                <div
                  key={v.id}
                  className={`${styles.square} ${
                    v.binaryVal === 0 ? styles.white : styles.black
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
