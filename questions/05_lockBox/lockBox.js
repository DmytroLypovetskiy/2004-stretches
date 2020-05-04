const lockBox = (code, msg) => {
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
        throw new Error('wrong types');
      } else {
        console.log(msg);
        return msg;
      }
    }
  }


};

module.exports = {
  lockBox
};