// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  return new Array(n)
    .fill('')
    .map(item => {
      return func();
    });
};

// see test specs to complete this stretch

module.exports = {
  repeater
};