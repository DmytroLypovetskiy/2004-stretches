const { moveZeroes } = require('./moveZeroes');

describe('moveZeroes', () => {
  test('It takes an array and returns an array.', () => {
    const arr = [0, 2, 3];
    const result = moveZeroes(arr);
    expect(Array.isArray(result)).toBe(true);
  });
  test('It takes an array and returns the same array (mutates array in place).', () => {
    const arr = [0, 2, 3];
    const result = moveZeroes(arr);
    expect(arr === result).toBe(true);
  });
  test('It moves the zeros in the array and moves them to the end.', () => {
    const arr = [0, 0, 0, 1];

    moveZeroes(arr);

    expect(arr[3]).toBe(0);
    expect(arr.indexOf(1)).toBe(0);
  });

  test('It retains the order of the non-zero numbers in the array.', () => {
    const arrTwo = [];

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max) + 1);
    };

    for (let i = 0; i < 20; i++) {
      arrTwo.push(getRandomInt(20));
    }
    const randomIdx = getRandomInt(19);
    arrTwo[randomIdx] = 0;
    arrTwo[randomIdx + 1] = 0;
    const nextNum = arrTwo[randomIdx + 2];
    console.log(arrTwo);
    const result = moveZeroes(arrTwo);
    console.log(result);
    expect(arrTwo[randomIdx] !== 0).toBe(true);
    expect(arrTwo[randomIdx] === nextNum).toBe(true);
  });
});
