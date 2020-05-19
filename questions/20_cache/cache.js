// see test specs

const hash = {}

function cache(cb) {
  if (typeof cb !== 'function') {
    throw new Error('Input must be a function.');
  }

  return (...args) => {
    const ar = args.join();

    if (!hash.hasOwnProperty(ar)) {
      hash[ar] = cb(...args);
    }
    return hash[ar];
  }
}

module.exports = {
  cache
};