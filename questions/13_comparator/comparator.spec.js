const { comparator } = require('./comparator');

describe('Comparator should take two arguments -> selectKey and Obj and sort by key type entered', () => {
  const people = [
    { name: 'Noah J', age: 20 },
    { name: 'Justin Cook', age: 22 },
    { name: 'Ethan K', age: 21 },
  ];
  test('comparator should notify if key not present', () => {
    expect(comparator('movies', people)).toEqual('incorrect key');
  });
  test('comparator should sort by age', () => {
    expect(comparator('age', people)).toEqual([
      { name: 'Noah J', age: 20 },
      { name: 'Ethan K', age: 21 },
      { name: 'Justin Cook', age: 22 },
    ]);
  });
  test('comparator should sort by last name', () => {
    expect(comparator('name', people)).toEqual([
      { name: 'Justin Cook', age: 22 },
      { name: 'Noah J', age: 20 },
      { name: 'Ethan K', age: 21 },
    ]);
  });
});
