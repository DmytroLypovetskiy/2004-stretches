const { decypher } = require('./cipher2.js');

describe("You've recieved a secret message encoded using the encryption function in cipher.js", () => {
  describe('decypher', () => {
    it('It takes a string and returns a string', () => {
      const result = decypher('104olle');
      expect(typeof result).toEqual('string');
    });
    it('It converts the first sequence of numbers into the correct letter', () => {
      /* Use String.fromCharCode() 
                DOCS >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode */

      const resultTwo = decypher('103eodbyo');
      expect(resultTwo.slice(0, 1)).toEqual('g');
    });
    it('The last character of the encoded message is the second character of the secret message', () => {
      const resultThree = decypher('99ynspiraco');
      expect(resultThree[1]).toEqual('o');
    });
    it('The first character after the UTF-16 code is the last character of the message', () => {
      const resultFour = decypher('99eunterintelligenco');
      const lastIdx = resultFour.length - 1;
      expect(resultFour[lastIdx]).toEqual('e');
    });
    it('It returns the message correctly decyphered', () => {
      const resultFive = decypher('111eerativp');
      expect(resultFive).toEqual('operative');
    });
  });
  describe('Bonus', () => {
    it('decypher works on full sentences.', () => {
      const secretMsg = decypher('84eh 102xo 105s 105n 116eh 104ne 104.useo');

      expect(secretMsg).toEqual('The fox is in the hen house.');
    });
  });
});
