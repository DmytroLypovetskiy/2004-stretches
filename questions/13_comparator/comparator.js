//write a func that takes two arg... selectKey and obj

const comparator = (key, obj) => {
  const searchObj = {
    [key]: {}
  };
  const values = [];

  obj.forEach(o => {
    if (o.hasOwnProperty(key)) {
      searchObj[key][o[key]] = o;
      values.push(o[key]);
    }
  });

  if (Object.values(searchObj[key]).length === 0) {
    return 'incorrect key';
  }

  return values.sort((a, b) => {
    if (a.length !== undefined && b.length !== undefined) {
      return a.split(' ')[1] > b.split(' ')[1]
    }
    return a > b;
  }).map(val => {
    return searchObj[key][val];
  });

};

module.exports = {
  comparator
};