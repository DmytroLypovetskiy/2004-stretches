// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  return str1.split('').sort().join(',') === str2.split('').sort().join(',');
};

module.exports = {
  checkAnagrams
};