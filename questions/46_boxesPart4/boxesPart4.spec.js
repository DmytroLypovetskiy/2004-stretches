const { Box } = require('./boxesPart4');

describe('Boxes, part 4!', () => {
  it('Add an expand method that allows for packing more boxes.', () => {
    const SmallBox = new Box('beige', 1);

    SmallBox.pack('Green', 1);
    expect(() => SmallBox.pack('Red', 1)).toThrow();

    SmallBox.expand(2, [
      ['Red', 1],
      ['Red', 2],
    ]);
    expect(SmallBox.contents.length).toEqual(3);
    expect(SmallBox.contents[1].color).toEqual('Red');
  });
  it('Add a loot method that returns a box from contents. If given an index that does not exist, it returns a random box.', () => {
    const MediumBox = new Box('Lavender', 2);
    MediumBox.expand(1, [
      ['Red', 1],
      ['Orange', 1],
      ['Yellow', 1],
    ]);
    expect(MediumBox.loot(1).color).toEqual('Orange');
    const RandomBox = MediumBox.loot(10);
    expect(RandomBox).toBeInstanceOf(Box);
    expect(
      RandomBox.color === 'Red' ||
        RandomBox.color === 'Orange' ||
        RandomBox.color === 'Yellow'
    ).toBe(true);
  });
});
