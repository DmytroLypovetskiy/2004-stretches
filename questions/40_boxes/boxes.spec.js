const { Box } = require('./boxes');

describe('Boxes', () => {
  it('Box is a class with a color property, a capacity property and contents property.', () => {
    const RedBox = new Box('red', 10);

    expect(RedBox.color).toEqual('red');
    expect(RedBox.contents.length).toEqual(0);
  });
  it('Box has a method that puts new boxes into itself', () => {
    const BlueBox = new Box('blue', 5);

    BlueBox.pack('teal', 3);

    expect(BlueBox.contents[0] instanceof Box).toEqual(true);
  });
});
