const { trim } = require('./trim');

describe('Trim', () => {
  test('it should return an object', () => {
    const obj = {
      foo: false,
      bar: undefined,
      bazz: null,
      quq: 0,
    };
    const trimmed = trim(obj);
    expect(typeof trimmed === 'object').toBe(true);
  });

  test('it should return a new object. keys with undefined or null values from the original object are removed.', () => {
    const obj = {
      foo: false,
      bar: undefined,
      bazz: null,
      quq: 0,
    };
    const trimmed = trim(obj);
    const result = { foo: false, quq: 0 };
    expect(trimmed).toEqual(result);
  });

  test('is not hard coded', () => {
    const funKeys = ['bleep', 'blop', 'blammo', 'kerplunk'];
    const randomIdx = Math.floor(Math.random() * 1000) % funKeys.length;

    const obj = {
      [funKeys[randomIdx]]: false,
      bar: undefined,
      bazz: null,
      quq: 0,
    };
    const trimmed = trim(obj);
    const result = { [funKeys[randomIdx]]: false, quq: 0 };
    expect(trimmed).toEqual(result);
  });
});
