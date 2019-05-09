import React from 'react';
import PropTypes from 'prop-types';

import FullscreenLayout from './fullscreen-layout';
import styles from './wolfram-ca.module.css';
import './layout.css';

const WIDTH_OF_CA = 51;
const HEIGHT_OF_CA = 500;

const decimalToBinary = (decimal) => {
  const binArray = [];

  if (!decimal || decimal < 0 || decimal > 255) {
    return null;
  }

  for (let i = 0; i < 8; i += 1) {
    // eslint-disable-next-line no-bitwise
    binArray[i] = (decimal >> i) & 1;
  }

  console.log(binArray);

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

  console.log(currentArr);

  const wolframArr = [firstArr];
  const patternArray = decimalToBinary(decimal);

  for (let i = 1; i < HEIGHT_OF_CA; i += 1) {
    wolframArr[i] = getNextArray(currentArr, patternArray);
    currentArr = wolframArr[i];

    if (i === 1) {
      console.log(currentArr);
    }
  }

  return wolframArr;
};

const WolframCA = ({ value }) => (
  <FullscreenLayout>
    <div className={styles.wolframWrapper}>
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
    </div>
  </FullscreenLayout>
);

WolframCA.propTypes = {
  value: PropTypes.string.isRequired,
};

export default WolframCA;
