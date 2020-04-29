const { checkAnagrams } = require('./anagrams');

describe('Anagram', () => {
  test('it should return a boolean', () => {
    expect(typeof checkAnagrams('hello', 'world')).toEqual('boolean');
  });

  test('it should return true if the 2 words are anagrams', () => {
    expect(checkAnagrams('fullstack', 'stackfull')).toEqual(true);
    expect(checkAnagrams('proletarianize', 'prerealization')).toEqual(true);
  });

  test('it should return false if the 2 words are not anagrams', () => {
    expect(checkAnagrams('russell', 'wilson')).toEqual(false);
    expect(checkAnagrams('1233456', '09823485')).toEqual(false);
  });
});
