import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import FullscreenLayout from './fullscreen-layout';
import WolframRep from './wolfram-rep';
import styles from './wolfram-ca.module.css';
import './layout.css';

const WIDTH_OF_CA = 51;
const HEIGHT_OF_CA = 500;

const decimalToBinary = (decimal) => {
  const binArray = [];

  if (!_.isNumber(decimal) || decimal < 0 || decimal > 255) {
    return null;
  }

  for (let i = 0; i < 8; i += 1) {
    // eslint-disable-next-line no-bitwise
    binArray[i] = (decimal >> i) & 1;
  }

  return binArray;
};

const getFirstArray = () => {
  const arr = [];
  const midPoint = Math.floor(WIDTH_OF_CA / 2);

  for (let i = 0; i < WIDTH_OF_CA; i += 1) {
    arr[i] = i === midPoint ? 1 : 0;
  }

  return arr;
};

const getNextArray = (curr, patternArray) => curr.map((c, index) => {
  const firstVal = index === 0 ? 0 : curr[index - 1] * 4;
  const secondVal = c * 2;
  const thirdVal = index === (curr.length - 1) ? 0 : curr[index + 1] * 1;

  return patternArray[(firstVal + secondVal + thirdVal)];
});

const getWolframCAArray = (decimal) => {
  const firstArr = getFirstArray();
  let currentArr = firstArr;

  const wolframArr = [firstArr];
  const patternArray = decimalToBinary(decimal);

  for (let i = 1; i < HEIGHT_OF_CA; i += 1) {
    wolframArr[i] = getNextArray(currentArr, patternArray);
    currentArr = wolframArr[i];
  }

  return wolframArr;
};

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
                getWolframCAArray(value).map(
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
