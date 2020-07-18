const fold = require('./fold');

describe('Fold', () => {
  it('takes an array and an integer as arguments and returns an array', () => {
    const arrOne = [1];
    const result = fold(arrOne, 1);

    expect(fold.length).toEqual(2);
    expect(Array.isArray(result)).toEqual(true);
  });
  it('folds a given array of integers by the middle x-times, adding the values on either sides of the fold', () => {
    const arrTwo = [10, 11, 12, 13, 14, 15];

    expect(fold(arrTwo, 1)).toEqual([25, 25, 25]);
  });
  it('works with arrays with odd lengths.', () => {
    const arrThree = [10, 20, 30];

    expect(fold(arrThree, 1)).toEqual([40, 20]);

    const arrFour = [1, 2, 3, 4, 5];

    expect(fold(arrFour, 1)).toEqual([6, 6, 3]);
    expect(fold(arrFour, 2)).toEqual([9, 6]);
  });
});
