const { findBy } = require('./findBy');

describe('findBy will be utilized to return objects from arrays.', () => {
  test('From an array of objects, findBy will search by the key and value provided.', () => {
    const groceries = [
      { name: 'grapes', type: 'fruit', price: 5 },
      { name: 'oranges', type: 'fruit', price: 8 },
      { name: 'tofu', type: 'protein', price: 3 },
      { name: 'seltzer', type: 'beverage', price: 7 },
      { name: 'oatmeal', type: 'carb', price: 2 },
    ];
    const result = findBy(groceries, 'name', 'tofu');
    expect(result).toEqual(groceries[2]);
  });
  test('It utilizes the Array.prototype.find method. ', () => {
    const zooAnimals = [
      { name: 'shark', type: 'fish', location: 'tank' },
      { name: 'monkey', type: 'mammal', location: 'jungle' },
      { name: 'otter', type: 'mammal', location: 'river' },
    ];
    const findSpy = jest.spyOn(zooAnimals, 'find');
    findBy(zooAnimals, 'name', 'otter');
    findBy(zooAnimals, 'type', 'fish');

    const findMock = findSpy.mock;
    expect(findMock.calls.length).toEqual(2);
    expect(findMock.results[0].value).toEqual(zooAnimals[2]);
    expect(findMock.results[1].value).toEqual(zooAnimals[0]);
  });
});
