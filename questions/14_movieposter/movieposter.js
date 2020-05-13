//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  if (arr.length === 0) throw new Error('empty array');


  const lns = arr.map(el => el.length);
  const max = Math.max(...lns);
  console.log(max);

  let res = '* ' + ''.repeat(max + 2) + ' *\n';

  res += arr.map(el => {
    const diff = max - el.length;

    return (diff === 0) ? `* ${el} *\n` : `* ${el}` + ' '.repeat(diff) + ' *\n';
  }).join('') + '* ' + ''.repeat(max + 2) + ' *\n';

  console.log(res);
  return res;
};

module.exports = {
  movieposter
};