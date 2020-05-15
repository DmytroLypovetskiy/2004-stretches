// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  if (n === '' || n === undefined) return '';
  if (n === 1) return `${n}`;

  let res = '';
  let counter = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      res += counter;
      counter++;
    }
    if (i < n - 1) {
      res += '\n';
    }
  }
  return res;
};

module.exports = {
  floydsTriangle
};