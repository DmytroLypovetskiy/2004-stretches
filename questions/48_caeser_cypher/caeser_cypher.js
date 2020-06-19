// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  const startCharcode = 97;
  const endCharcode = 122;
  let res = '';


  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (/[0-9]/.test(str[i])) {
      res += (+str[i] + shift) % 10;
    } else if (/[a-zA-Z]/.test(str[i])) {
      const updShift = shift % 26;

      if (charCode + updShift > endCharcode) {
        res += String.fromCharCode((charCode + updShift) % endCharcode + startCharcode - 1);
      } else {
        res += String.fromCharCode(charCode + updShift);
      }
    } else {
      throw new Error('wrong input');
    }
  }
  return res;
};

module.exports = {
  encryptString
};