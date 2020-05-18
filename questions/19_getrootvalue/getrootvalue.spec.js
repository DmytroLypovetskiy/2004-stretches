const { getrootvalue } = require('./getrootvalue');

describe('getrootvalue functionality to be called with 2 paramaters obj and val.', () => {
  test('test 1: getrootvalue should return the correct root value', () => {
    const obj = {
      one: {
        l1: {
          val1: [40, 65, 113, 200],
        },
      },
      two: {
        l1: [45, 1, 75, 80],
        l2: [12, 38, 2, 15],
      },
      three: {
        l1: [10, 92, 53, 71],
        l2: [82, 34, 6, 19],
      },
    };
    const val = 40;
    expect(getrootvalue(obj, val)).toEqual('one');
  });
  test('test 2: getrootvalue should return the correct root value', () => {
    const obj = {
      ifyou: {
        youwant: {
          myfuture: [2, 4, 5, 7],
        },
        forget: {
          mypast: [34, 71, 78, 93],
        },
      },
      nowdont: {
        gowasting: {
          myprecious: [87, 12, 45, 22],
        },
        time: [32, 43, 11],
      },
      getyour: {
        acttogether: [65, 99, 83, 23],
        wecould: {
          bejustfine: [1, 76, 27, 88],
        },
      },
    };
    const val = 87;
    expect(getrootvalue(obj, val)).toEqual('nowdont');
  });
  test('getrootvalue should return null is val not found', () => {
    const obj = {
      Iwanna: {
        really: [1, 2, 3, 4],
      },
      reallyreally: {
        wannazigazig: [5, 6, 7, 8],
        ah: [10],
      },
    };
    const val = 99;
    expect(getrootvalue(obj, val)).toEqual(null);
  });
});
