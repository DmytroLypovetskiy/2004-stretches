/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  return objs.reduce((acc, next) => {

    for (let key in next) {
      if (acc.hasOwnProperty(key)) {
        acc[key] += next[key];
      } else {
        acc = {
          ...acc,
          [key]: next[key]
        };
      }
    }

    return acc;
  }, {});
}

module.exports = {
  zip
};