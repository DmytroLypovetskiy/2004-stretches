// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
  if (!Array.isArray(arr) || arr === undefined) throw new Error('Not an array');
  const visited = [];
  const pairs = [];

  arr = arr.sort((a, b) => a - b);

  for (let el in arr) {
    const val = arr[el];

    if (visited.includes(Math.abs(val - 2))) {
      pairs.push([Math.abs(val - 2), val])
    }
    visited.push(val);
  }
  return pairs
};

module.exports = {
  diffTwo
};