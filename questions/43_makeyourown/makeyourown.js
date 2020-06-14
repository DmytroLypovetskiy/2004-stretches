// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

const makeyourown = (arr, cb) => {
  if (!Array.isArray(arr) || typeof cb !== 'function') throw new Error('Wrong arguments');

  return arr.map(el => cb(el))
};

module.exports = {
  makeyourown
};