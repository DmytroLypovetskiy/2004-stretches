const { romanInteger } = require('./romanInteger.js');

describe('romanInteger', () => {
  test('It should take a number and a return a string', () => {
    const integerToRoman = romanInteger(5);
    expect(typeof integerToRoman).toEqual('string');
  });
  test('It should correctly convert an integer into Roman numerals', () => {
    expect(romanInteger(3)).toEqual('III');
    expect(romanInteger(20)).toEqual('XX');
    expect(romanInteger(50)).toEqual('L');
    expect(romanInteger(400)).toEqual('CD');
    expect(romanInteger(444)).toEqual('CDXLIV');
    expect(romanInteger(1111)).toEqual('MCXI');
    expect(romanInteger(1999)).toEqual('MCMXCIX');
    expect(romanInteger(3999)).toEqual('MMMCMXCIX');
  });
  test('It should throw an error if given an invalid number', () => {
    expect(() => romanInteger(-1)).toThrow();
    expect(() => romanInteger(0)).toThrow();
    expect(() => romanInteger(4000)).toThrow();
  });
});
