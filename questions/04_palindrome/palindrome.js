/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (word) => {
  const strWord = ('' + word).replace(/[^0-9a-z]/gi, '');
  const half = Math.floor(strWord.length / 2);
  let p2 = strWord.length - 1;

  for (let p1 = 0; p1 <= half; p1++) {
    if (strWord[p1].toLowerCase() !== strWord[p2].toLowerCase()) return false;
    p2--;
  }
  return true;
};

module.exports = {
  validPalindrome
};