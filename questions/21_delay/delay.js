const delay = (str, time) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(str));
  }, time)
};

module.exports = {
  delay
};