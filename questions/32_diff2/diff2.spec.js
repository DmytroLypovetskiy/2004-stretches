const { diffTwo } = require('./diff2');

describe('diffTwo functionality', () => {
  it('diffTwo should take a single argument and that argument should be an array or throw', () => {
    expect(diffTwo.length).toEqual(1);
    expect(() => diffTwo('Skull and bones')).toThrow();
  });
  it('diffTwo should return all pairs of integers from a given array that have a difference of 2', () => {
    expect(diffTwo([1, 2, 3, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
    expect(diffTwo([2, 3, 1, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  it('diffTwo should return all pairs of integers from a different array that have a difference of 2', () => {
    expect(diffTwo([12, 3, 30, 5, 88, 90, 32, 1])).toEqual([
      [1, 3],
      [3, 5],
      [30, 32],
      [88, 90],
    ]);
  });
  it('diffTwo should return all pairs of integers from a different array that have a difference of 2', () => {
    expect(diffTwo([8, 2, 12, 18, 75, 5, 10, 1, 77, 79])).toEqual([
      [8, 10],
      [10, 12],
      [75, 77],
      [77, 79],
    ]);
  });
});
