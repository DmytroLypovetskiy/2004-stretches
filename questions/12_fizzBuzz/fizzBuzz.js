const fizzBuzz = (num) => {
  const res = [];

  if (!Number.isNaN(num)) {
    throw new Error('wrong input');
  }
  if (num < 1) {
    throw new Error('wrong input');
  }

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) res.push('FIZZ');
    if (i % 5 === 0) res.push('BUZZ')
    if (i % 3 !== 0 || i % 5 == 0) res.push(i);
  }

  console.log(res, 'res');

  return res;
};
module.exports = {
  fizzBuzz
};