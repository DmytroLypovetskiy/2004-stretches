const decypher = (str) => {
  return str
    .split(' ')
    .map(word => {
      return String.fromCharCode(parseInt(word)) + word[word.length - 1] + word.slice(2, -1) + word[1];
    }).join(' ');
};
module.exports = {
  decypher
};