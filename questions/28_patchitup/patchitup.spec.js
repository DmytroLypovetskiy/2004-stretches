const {} = require('./patchitup');

describe('"monkey-patched" Array class functionality', () => {
  it('"countBy" is added to the Array class', () => {
    const arr = [1, 2, 3, 3, 2, 32, 3, 3, 4, 5];
    expect(arr.countBy()).toEqual({
      '1': 1,
      '2': 2,
      '3': 4,
      '4': 1,
      '5': 1,
      '32': 1,
    });
  });
  it('"countBy" can take an optional callback in argument', () => {
    const mockCB = jest.fn((num) => num % 3);
    const arr = [1, 2, 3, 3, 2, 32, 3, 3, 4, 5];
    expect(arr.countBy(mockCB)).toEqual({ 0: 4, 1: 2, 2: 4 });
  });
  it('"countBy" can be call with an alternate array', () => {
    const mockCB = jest.fn((str) => str[0]);
    const arrOfStrings = [
      'abe',
      'banana',
      'compost',
      'accurate',
      'angery',
      'boister',
    ];
    expect(arrOfStrings.countBy(mockCB)).toEqual({ a: 3, b: 2, c: 1 });
  });
});
