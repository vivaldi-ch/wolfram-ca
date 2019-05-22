import isFinite from 'lodash/isFinite';

export const decimalToBinary = (decimal, limit = 8) => {
  const binArray = [];

  if (!isFinite(decimal) || decimal < 0 || decimal > 255) {
    return [];
  }

  for (let i = 0; i < limit; i += 1) {
    // eslint-disable-next-line no-bitwise
    binArray[i] = (decimal >> i) & 1;
  }

  // since the bit is obtained in reverse
  return binArray.reverse();
};

export const getFirstArray = (width) => {
  const arr = [];
  const midPoint = Math.floor(width / 2);

  for (let i = 0; i < width; i += 1) {
    arr[i] = i === midPoint ? 1 : 0;
  }

  return arr;
};

export const getNextArray = (curr, patternArray) => curr.map((c, index) => {
  const firstVal = index === 0 ? 0 : curr[index - 1] * 4;
  const secondVal = c * 2;
  const thirdVal = index === curr.length - 1 ? 0 : curr[index + 1] * 1;

  return patternArray[firstVal + secondVal + thirdVal];
});

export const getWolframCAArray = (decimal, width, height) => {
  const firstArr = getFirstArray(width);
  let currentArr = firstArr;

  const wolframArr = [firstArr];
  const patternArray = decimalToBinary(decimal).reverse();

  for (let i = 1; i < height; i += 1) {
    wolframArr[i] = getNextArray(currentArr, patternArray);
    currentArr = wolframArr[i];
  }

  return wolframArr;
};
