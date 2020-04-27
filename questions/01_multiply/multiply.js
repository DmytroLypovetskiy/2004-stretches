// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
  //console.log([].slice.call(arguments));
  //console.log([...arguments].length);
  if (num1 === undefined || num2 === undefined) throw new Error('Values should not be empty');

  if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('Please provide valid numbers');

  return num1 * num2;
};

module.exports = {
  multiply
};