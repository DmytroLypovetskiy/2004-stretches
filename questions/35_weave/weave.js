// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
  const res = [];
  let maxLn = 0;

  for (let arg of args) {
    if (!Array.isArray(arg)) throw new Error('not an array');

    if (arg.length > maxLn) maxLn = arg.length;
  }

  for (let i = 0; i < maxLn; i++) {
    for (let arg of args) {
      const val = (arg[i] === undefined) ? null : arg[i];

      res.push(val)
    }
  }

  return res;
};

module.exports = {
  weave
};