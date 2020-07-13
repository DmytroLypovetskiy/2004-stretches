const balanced = require('./balancedArr');

describe('balanced', () => {
  it('it returns the index where the sum of the array left of the index, and the sum of the array right of the index are equal.', () => {
    const arrOne = [1, 2, 3, 4, 3, 2, 1];
    expect(balanced(arrOne)).toEqual(3);

    const arrTwo = [20, 10, -80, 10, 10, 15, 35];
    expect(balanced(arrTwo)).toEqual(0);

    const arrThree = [1, 50, -51, 1, 100, 1];
    expect(balanced(arrThree)).toEqual(4);
  });
  it('it returns -1 if no balance point is found.', () => {
    const arrFour = [0, 1, 2, 3, 4];
    expect(balanced(arrFour)).toEqual(-1);
  });
});
