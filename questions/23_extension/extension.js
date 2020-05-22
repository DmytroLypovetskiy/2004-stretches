//write a function that takes a function, and makes it callable with two invocations

const extensions = (cb) => {
  if (typeof cb !== 'function') throw new Error('Callback is not a functuin');

  return (val1) => {
    if (isNaN(val1)) throw new Error('Is not a number');

    return (val2) => {
      if (isNaN(val2)) throw new Error('Is not a number');

      return cb(val1, val2);
    };
  }
};

module.exports = {
  extensions
};