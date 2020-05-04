const lockBox = (code, msg) => {
  console.log(typeof msg);
  if (isNaN(code) || typeof msg !== 'string') throw new Error('wrong types');

  return {
    modCode(code, newCode) {
      return code = newCode;
    },
    modMessage(msg, newMsg) {
      return msg = newMsg;
    },
    revealMessage(tryCode) {
      if (tryCode !== code) {
        throw 'incorrect code';
      } else {
        return msg;
      }
    }
  }


};

module.exports = {
  lockBox
};