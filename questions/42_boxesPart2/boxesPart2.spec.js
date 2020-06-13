const { Box } = require('../40_boxes/boxes');
//You will need to continue working in the boxes.js in /40_boxes

describe('Boxes, Part two!', () => {
  it('If the capacity of the box has been met, a error will be thrown.', () => {
    const MagentaBox = new Box('Magenta', 2);

    MagentaBox.pack('pink', 1);
    MagentaBox.pack('red', 1);

    expect(() => MagentaBox.pack('black', 1)).toThrow();
  });
  it('The length of the contents array will never exceed the capacity of the box', () => {
    const TealBox = new Box('Teal', 2);
    for (let i = 0; i < 2; i++) {
      TealBox.pack('Green', 1);
    }
    expect(() => TealBox.pack('Green', 1)).toThrow();
    expect(TealBox.contents.length).toEqual(2);
  });
  it('Boxes can be nested into inner boxes.', () => {
    const GreyBox = new Box('Grey', 2);

    GreyBox.pack(`black`, 1);
    GreyBox.pack(`white`, 1);

    const BlackBox = GreyBox.contents[0];
    BlackBox.pack('fuscia', 1);

    expect(GreyBox.contents[0].contents[0].color).toEqual('fuscia');
  });
  it('The unpack method will return all the color of the boxes in an array.', () => {
    const YellowBox = new Box('Yellow', 2);

    YellowBox.pack(`Orange`, 1);
    YellowBox.pack(`Aqua`, 1);

    const OrangeBox = YellowBox.contents[0];
    OrangeBox.pack('Indigo', 1);
    const IndigoBox = OrangeBox.contents[0];
    IndigoBox.pack('Mauve', 1);

    const result = YellowBox.unpack();
    expect(result.length).toEqual(5);
    expect(result).toEqual(['Yellow', 'Orange', 'Indigo', 'Mauve', 'Aqua']);
  });
});
