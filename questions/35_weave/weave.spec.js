const { weave } = require('./weave');

describe('weave functionality', () => {
  it('weave can take any number of arrays as arguments and will not except any other type', () => {
    const ranNum = Math.floor(Math.random() * 10) + 1;
    const argArray = [];
    for (let i = 0; i < ranNum; i++) {
      argArray.push([]);
    }
    const result = weave(...argArray);
    expect(Array.isArray(result)).toEqual(true);
    expect(() => weave([122], 'as')).toThrow();
  });
  it('weave can weave two arrays', () => {
    const arr1 = ['s', 'h', 'a', 'k', 'e'];
    const arr2 = ['b', 'a', 'k', 'e'];
    expect(weave(arr1, arr2)).toEqual([
      's',
      'b',
      'h',
      'a',
      'a',
      'k',
      'k',
      'e',
      'e',
      null,
    ]);
  });
  it('weave can weave three arrays', () => {
    const arr1 = ['E', 'l', 'i', 'o', 't'];
    const arr2 = ['D', 'e', 'a', 'n', 'n', 'a'];
    const arr3 = ['T', 'h', 'o', 'm', 'p', 's', 'o', 'n'];
    expect(weave(arr1, arr2, arr3)).toEqual([
      'E',
      'D',
      'T',
      'l',
      'e',
      'h',
      'i',
      'a',
      'o',
      'o',
      'n',
      'm',
      't',
      'n',
      'p',
      null,
      'a',
      's',
      null,
      null,
      'o',
      null,
      null,
      'n',
    ]);
  });
});
