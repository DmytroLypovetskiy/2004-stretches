const findBy = (arr, key, val) => {
  return arr.find(el => el[key] === val)
};

module.exports = {
  findBy
};