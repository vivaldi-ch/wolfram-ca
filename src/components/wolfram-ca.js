import React from 'react';
import PropTypes from 'prop-types';

import FullscreenLayout from './fullscreen-layout';
import WolframRep from './wolfram-rep';
import {
  decimalToBinary,
  getWolframCAArray,
} from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';
import './layout.css';

const WIDTH_OF_CA = 51;
const HEIGHT_OF_CA = 500;

const WolframCA = ({ value }) => {
  const isNumberValid = value > 0 && value < 256;

  return (
    <FullscreenLayout>
      <h3>Index: {value}</h3>
      <div>
        <WolframRep wolframArr={decimalToBinary(value)} />
      </div>
      <div
        className={styles.wolframWrapper}
        style={{
          display: isNumberValid ? 'block' : 'flex',
        }}
      >
        { isNumberValid
          ? (
            <div className={styles.table}>
              {
                getWolframCAArray(value, WIDTH_OF_CA, HEIGHT_OF_CA).map(
                  object => (
                    <div className={styles.row}>
                      {object.map(o => <div className={`${styles.cell} ${(o === 1 ? styles.one : '')}`} />)}
                    </div>
                  ),
                )
              }
            </div>
          )
          : <h4 className={styles.notFound}>Invalid number.</h4>
        }
      </div>
    </FullscreenLayout>
  );
};

WolframCA.propTypes = {
  value: PropTypes.string.isRequired,
};

export default WolframCA;
