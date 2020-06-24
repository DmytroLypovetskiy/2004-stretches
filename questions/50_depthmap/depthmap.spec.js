const { recordDepth } = require('./depthmap');

describe('recordDepth functionality', () => {
  it('recordDepth takes one argument and it most be an object', () => {
    expect(() => recordDepth('asd')).toThrow();
    expect(recordDepth.length).toEqual(1);
  });
  it('recordDepth should "dig" through Tutankhamun tomb and install depth keys', () => {
    let Tutankhamun = {
      stairs: {
        passage: {
          antechamber: {
            annex: '4x4feet',
            burialchamber: { treasury: '5x5feet' },
          },
        },
      },
    };
    expect(recordDepth(Tutankhamun)).toEqual({
      stairs: {
        passage: {
          antechamber: {
            annex: '4x4feet',
            burialchamber: { treasury: '5x5feet', depth: 4 },
            depth: 3,
          },
          depth: 2,
        },
        depth: 1,
      },
      depth: 0,
    });
  });
  it('recordDepth should "dig" through Nefertari tomb and install depth keys', () => {
    let Nefertari = {
      stairs: {
        room1: {
          entrancehall: { firstannex: '5x10feet' },
          interiorstairs: {
            sarcophagus: {
              secondannex: '3x3feet',
              thirdannex: '5x5feet',
              sanctum: '5x8feet',
            },
          },
        },
      },
    };
    expect(recordDepth(Nefertari)).toEqual({
      stairs: {
        room1: {
          entrancehall: { firstannex: '5x10feet', depth: 3 },
          interiorstairs: {
            sarcophagus: {
              secondannex: '3x3feet',
              thirdannex: '5x5feet',
              sanctum: '5x8feet',
              depth: 4,
            },
            depth: 3,
          },
          depth: 2,
        },
        depth: 1,
      },
      depth: 0,
    });
  });
});
