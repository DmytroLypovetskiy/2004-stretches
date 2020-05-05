const { zip } = require('./zip');

describe('Zip Function', () => {
  test('should return an empty object for empty objects', () => {
    let result = zip([{}, {}, {}]);
    expect(result).toEqual({});
  });

  test('should add up like keys', () => {
    let result = zip([{ x: 1 }, { x: 2 }, { x: 10 }, { x: 0 }]);
    expect(result).toEqual({ x: 13 });
  });

  test('should handle objects with different key lengths and values,', () => {
    let result = zip([
      { bleep: 1 },
      { blop: 2, blarp: 22 },
      { bleep: 10, blarp: 2 },
      { blop: 10 },
      {},
    ]);
    expect(result).toEqual({ bleep: 11, blop: 12, blarp: 24 });
  });
});
