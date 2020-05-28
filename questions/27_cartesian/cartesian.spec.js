const { cartesian } = require('./cartesian');

describe('cartesian', () => {
  test('It takes an array of directions, representing miles.', () => {
    expect(() => cartesian('n s e w')).toThrow();
  });
  test('It returns a string if the directions point back to the starting point.', () => {
    const mapquest = cartesian(['n', 's', 'e', 'w']);
    expect(mapquest).toEqual("These directions don't go anywhere!");
  });
  test('Otherwise, it returns an object describing the most efficient directions.', () => {
    const longWalk = ['n', 's', 'e', 'w', 'e', 'n'];
    const randomDist = Math.floor(Math.random() * Math.floor(25));
    let longerWalk = new Array(randomDist);
    longerWalk.fill('w');

    const longestWalk = [...longerWalk, ...longWalk];
    const gMaps = cartesian(longestWalk);

    expect(gMaps).toEqual({ n: 1, s: 0, e: 0, w: randomDist - 1 });
  });
});
