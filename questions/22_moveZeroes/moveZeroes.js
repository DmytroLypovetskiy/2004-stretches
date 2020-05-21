const moveZeroes = (arr) => {
  const empties = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      empties.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  arr.push(...empties);
  return arr;
};

module.exports = {
  moveZeroes
};