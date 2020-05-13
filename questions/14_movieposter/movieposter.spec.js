const { movieposter } = require('./movieposter');

describe('movieposter functionality', () => {
  test('it should take an array of length greater than 0 or throw error', () => {
    expect(() => movieposter()).toThrow();
    expect(() => movieposter([])).toThrow();
  });
  test('it should return a string.', () => {
    expect(
      typeof movieposter(['Death', 'Rides', 'a', 'Horse']) === 'string'
    ).toEqual(true);
  });
  test('it should return the correctly formated movieposter based on argument', () => {
    const test = movieposter(['A', 'Fistful', 'of', 'Dollars']);
    expect(
      test.indexOf(`***********
* A       *
* Fistful *
* of      *
* Dollars *
***********`)
    ).toEqual(0);
  });
  test('it should return the correctly formated movieposter based on argument', () => {
    const test = movieposter([
      'Once',
      'Upon',
      'a',
      'Time',
      'in',
      'the',
      'West',
    ]);
    expect(
      test.indexOf(`********
* Once *
* Upon *
* a    *
* Time *
* in   *
* the  *
* West *
********`)
    ).toEqual(0);
  });
});
