import React from 'react';

import FullscreenLayout from './fullscreen-layout';
import styles from './wolfram-ca.module.css';
import './layout.css';

const WIDTH_OF_CA = 51;
const HEIGHT_OF_CA = 50;

const decimalToBinary = (decimal) => {
  const binArray = [];

  if (!decimal || decimal < 0 || decimal > 255) {
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

const getNextArray = (curr, decimal) => {
  const patternArray = decimalToBinary(decimal);

  return curr.map((c, index) => {
    const firstVal = index === 0 ? 0 : curr[index - 1] * 1;
    const secondVal = c * 2;
    const thirdVal = index === (curr.length - 1) ? 0 : curr[index + 1] * 4;

    return patternArray[firstVal + secondVal + thirdVal];
  });
};

const getWolframCAArray = (decimal) => {
  const firstArr = getFirstArray();
  let currentArr = firstArr;

  const wolframArr = [firstArr];

  for (let i = 1; i < HEIGHT_OF_CA; i += 1) {
    wolframArr[i] = getNextArray(currentArr, decimal);
    currentArr = wolframArr[i];
  }

  return wolframArr;
};

export default () => (
  <FullscreenLayout>
    <div className={styles.column}>
      {
        getWolframCAArray(30).map(
          object => (
            <div className={styles.row}>
              {object.map(o => <div className={`${styles.cell} ${(o === 1 ? styles.one : '')}`}>{o}</div>)}
            </div>
          ),
        )
      }
    </div>
  </FullscreenLayout>
);
