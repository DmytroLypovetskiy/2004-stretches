const {
  multiply
} = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply()).toThrow('Values should not be empty');

    expect(() => multiply('hello', 'world')).toThrow('Please provide valid numbers');
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2, 6)).toBe(12);

    // test that the returned value is correct
    expect(multiply(0, 5)).toBe(0);

    // test some other values
    expect(multiply(2, -3)).toBe(-6);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});