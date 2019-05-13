import {
  decimalToBinary,
  getFirstArray,
  getNextArray,
  getWolframCAArray,
} from '../wolfram';

describe('Wolfram Util', () => {
  it('should convert decimal to 8 digit binary', () => {
    const decimal = 100;
    const binary = [0, 1, 1, 0, 0, 1, 0, 0];

    expect(decimalToBinary(decimal)).toEqual(binary);
  });

  it('should not convert decimal to 8 digit binary if it is not a number', () => {
    expect(decimalToBinary(NaN)).toEqual(null);
  });

  it('should not convert decimal to 8 digit binary if it is less than 0 or more than 255', () => {
    expect(decimalToBinary(-1)).toEqual(null);
    expect(decimalToBinary(256)).toEqual(null);
  });

  it('should have the middle index as 1 when generating the first array', () => {
    const width = 11;
    const firstArr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];

    expect(getFirstArray(width)).toEqual(firstArr);
  });

  it('should generate the next array based on current array and a given pattern', () => {
    const currArr = [0, 1, 0, 1, 0, 1, 0, 1];
    const pattern = [1, 1, 1, 1, 1, 1, 1, 1];
    const expectedNextArr = [1, 1, 1, 1, 1, 1, 1, 1];

    expect(getNextArray(currArr, pattern)).toEqual(expectedNextArr);
  });

  it('should generate the entire 2D array based on a given pattern number, width, and height', () => {
    const decimal = 120;
    const width = 5;
    const height = 3;

    const expectedCAArray = [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
    ];

    expect(getWolframCAArray(decimal, width, height)).toEqual(expectedCAArray);
  });
});
