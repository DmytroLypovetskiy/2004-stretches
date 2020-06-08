const decypher = (str) => {
  return str
    .split(' ')
    .map(word => {
      word = String.fromCharCode(parseInt(word)) + word.slice(3);

      return word[0] + word[word.length - 1] + word.slice(2, -1) + word[1];
    }).join(' ');
};
module.exports = {
  decypher
};