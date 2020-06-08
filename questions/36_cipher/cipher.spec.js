const { encrypt } = require('./cipher.js');

describe('Your mission, should you choose to accept it, is to create a encryption function.', () => {
  describe('encrypt', () => {
    it('takes a string and returns a string.', () => {
      const result = encrypt('hello');
      expect(typeof result).toEqual('string');
    });
    it('The first character of the word needs to be converted to its ASCII code.', () => {
      /* Use String.prototype.charCodeAt() 
        DOCS >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt */

      const resultTwo = encrypt('goodbye');
      expect(resultTwo.slice(0, 3)).toEqual('103');
    });
    it('The second character of the word needs to be swapped with the last character', () => {
      const resultThree = encrypt('secret');

      expect(resultThree).toEqual('115tcree');
    });
  });
  describe('Bonus', () => {
    it('encrpyt works on full sentences.', () => {
      const secretMsg = encrypt("Don't give the game away.");
      expect(secretMsg.length).toEqual(33);
      expect(secretMsg).toEqual("68tn'o 103evi 116eh 103ema 97.ayw");
    });
  });
});
