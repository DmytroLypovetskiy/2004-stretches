const encrypt = (str) => {
  return str
    .split(' ')
    .map(word => {
      return word.charCodeAt(0) + word[word.length - 1] + word.slice(2, -1) + word[1];
    }).join(' ')
};

module.exports = {
  encrypt
};