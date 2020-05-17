//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error('Both arguments should be arrays');

  const tmp = [...arr1.reverse()];
  arr1.length = 0;
  arr1.push(...arr2.reverse());
  arr2.length = 0;
  arr2.push(...tmp);
};

module.exports = {
  arrayexchange
};