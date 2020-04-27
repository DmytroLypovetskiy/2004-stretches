const { pluck } = require('./pluck');

describe('Pluck', () => {
  test('it should pluck pairs from one object and return a new object', () => {
    const obj1 = { a: 1, b: true };
    const result = pluck(obj1, ['a']);
    expect(result).toEqual({ a: 1 });
  });

  test('it should return a new object, and not modify the current object', () => {
    const obj1 = { a: 1, b: true };
    const result = pluck(obj1, ['a']);
    expect(obj1).toEqual({ a: 1, b: true });
    expect(result).toEqual({ a: 1 });
    expect(result === obj1).toBe(false);
  });

  test('it should not add undefined keys to the new obj', () => {
    const obj1 = { 'Grace Hopper': 1, 'JavaScript Rules': true, Secret: 42 };
    const result = pluck(obj1, [
      'Grace Hopper',
      'JavaScript Rules',
      'Not Here',
    ]);
    expect(result).toEqual({ 'Grace Hopper': 1, 'JavaScript Rules': true });
  });

  test('it should work for falsey values', () => {
    const obj1 = { first: 0, second: false, third: '' };
    const result = pluck(obj1, ['first', 'second', 'x']);
    expect(result).toEqual({ first: 0, second: false });
  });
});
