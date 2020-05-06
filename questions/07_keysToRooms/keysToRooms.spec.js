const { keysToRooms } = require('./keysToRooms');

describe('keysToRooms', () => {
  test('it should take a 2D array and return a boolean', () => {
    expect(keysToRooms([[], []])).toEqual(expect.any(Boolean));
  });
  test('it should return true if and only if you can enter every room', () => {
    const validRooms = [[1], [2], [3], []];
    const output = keysToRooms(validRooms);

    expect(output).toBe(true);
  });

  test('it should return false if you are unable to enter a room', () => {
    const invalidRooms = [[1, 3], [3, 0, 1], [2], [0]];
    const output = keysToRooms(invalidRooms);

    expect(output).toBe(false);
  });
});
