/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, order, key) {
  return data
    .sort((obj, next) => obj[order] > next[order])
    .map(obj => obj[key])
}

module.exports = {
  sortOrder
};