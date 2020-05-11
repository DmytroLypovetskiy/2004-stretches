const { fizzBuzz } = require('./fizzBuzz');

describe('fizzBuzz', () => {
  test('it should accept an integer representing the length of a return array.', () => {
    expect(() => fizzBuzz('hello')).toThrow();
    expect(() => fizzBuzz(0.5)).toThrow();
    expect(() => fizzBuzz(-5)).toThrow();
  });
  test('it should return an array.', () => {
    expect(Array.isArray(fizzBuzz(300))).toEqual(true);
  });
  test('the array should start at 1 and increment by 1 until it reaches the length inputted.', () => {
    expect(fizzBuzz(1000).length).toEqual(1000);
  });
  test('for multiples of three, the array should output "Fizz" instead of the number', () => {
    const randomInt = (max) => {
      return Math.ceil(Math.random() * Math.floor(max));
    };

    const randomMultiple = randomInt(50) * 3;
    const result = fizzBuzz(150)[randomMultiple - 1];

    expect(result.includes('Fizz')).toEqual(true);
  });
  test('for multiples of five, the array should output "Buzz" instead of the number', () => {
    const randomInt = (max) => {
      return Math.ceil(Math.random() * Math.floor(max));
    };

    const randomMultiple = randomInt(300) * 5;
    const secondResult = fizzBuzz(1500)[randomMultiple - 1];

    expect(secondResult.includes('Buzz')).toEqual(true);
  });

  test('for multiples of three and five, the array should output "FizzBuzz" instead of the number', () => {
    const thirdResult = fizzBuzz(30)[14];

    expect(thirdResult.includes('Fizz')).toEqual(true);
    expect(thirdResult.includes('Buzz')).toEqual(true);
  });
});
