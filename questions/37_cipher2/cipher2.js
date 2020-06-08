const decypher = (str) => {
  return str
    .split(' ')
    .map(word => {
      console.log(word);
      console.log(String.fromCharCode(parseInt(word)), word[word.length - 1], word.slice(4, -1), word[3]);

      return String.fromCharCode(parseInt(word)) + word[word.length - 1] + word.slice(4, -1) + word[3];
    }).join(' ');
};
module.exports = {
  decypher
};