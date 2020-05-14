// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  const res = new Array(n)
    .fill('')
    .map(item => {
      return func();
    });

  return res;
};

// see test specs to complete this stretch

module.exports = {
  repeater
};