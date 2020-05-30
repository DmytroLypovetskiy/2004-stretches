// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object') throw new Error('Both arguments should be Objects');
  const supCounter = [];

  for (let key in recipe) {
    if (supplies.hasOwnProperty(key) || supplies[key] >= recipe[key]) {
      cakes++;
      supCounter.push(Math.floor(supplies[key] / recipe[key]))
    } else {
      return 0;
    }
  }

  return Math.min(...supCounter)
};

module.exports = {
  btownbake
};