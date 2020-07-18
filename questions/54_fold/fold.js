const fold = (arr, val) => {
  if (!Array.isArray(arr)) throw new Error('not array');
  //YOUR CODE HERE
  let p1 = 0;
  let p2 = arr.length - 1;

  const res = [];

  while (p2 > p1) {
    console.log(p1, p2, arr)
    res.push(arr[p1] + arr[p2]);

    console.log(p2, p1)

    p1++;
    p2--;
  }

  if (arr.length % 2 !== 0) {
    const mid = Math.ceil(arr.length / 2);
    res.push(arr[mid - 1]);
  }

  return res
};

module.exports = fold;