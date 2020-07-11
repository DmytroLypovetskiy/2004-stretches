const { twoNumberSum } = require('./twoNumberSum');

describe('twoNumberSum functionailty', () => {
  it('twoNumberSum should take two arguments... an array, and target value', () => {
    expect(twoNumberSum.length).toEqual(2);
  });
  it('twoNumberSum should have the correcct output', () => {
    expect(twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3)).toEqual([-5, 8]);
  });
  it('twoNumberSum should have the correcct output', () => {
    expect(twoNumberSum([5, -12, -6, 12, 5, 89, 9, -3], 83)).toEqual([-6, 89]);
  });
});
