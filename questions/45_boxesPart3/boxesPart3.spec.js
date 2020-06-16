const { Box } = require('./boxesPart3');

describe('Boxes, Part three! Now that boxes can be packed and unpacked, they need to be moved', () => {
  it('It has a method called moving van.', () => {
    const NavyBox = new Box('Navy', 8);
    for (let i = 0; i < NavyBox.capacity; i++) {
      NavyBox.pack('Olive', 3);
      const OliveBox = NavyBox.contents[i];
      OliveBox.pack('pewter', 2);
    }
    expect(typeof NavyBox.movingVan).toEqual('function');
  });
  it('The moving van method takes a duration and returns a setTimeOut using the duration.', () => {
    jest.useFakeTimers();

    const PinkBox = new Box('Pink', 3);
    PinkBox.pack('grey', 1);
    PinkBox.pack('darkGrey', 1);
    PinkBox.pack('fogGrey', 1);

    PinkBox.movingVan(1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  it('The method returns the value of unpack after the specified timout duration', () => {
    jest.useFakeTimers();
    const HotPinkBox = new Box('hotPink', 3);
    HotPinkBox.pack('grey', 1);
    HotPinkBox.pack('darkGrey', 1);
    HotPinkBox.pack('fogGrey', 1);

    unpackSpy = jest.spyOn(Box.prototype, 'unpack');
    vanSpy = jest.spyOn(Box.prototype, 'movingVan');
    const result = HotPinkBox.movingVan(4000);

    expect(unpackSpy.mock.calls.length).toEqual(0);
    expect(vanSpy.mock.calls[0][0]).toEqual(4000);

    jest.advanceTimersByTime(4000);

    expect(!!unpackSpy.mock.calls.length).toEqual(true);
  });
});
