// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  const res = {}

  for (key in obj) {
    if (obj[key] !== null) {
      res[key] = obj[key];
    }
  }

  return res;
};

module.exports = {
  trim
};