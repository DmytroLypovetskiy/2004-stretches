require('./thankUnext.js');
describe('thank u next', () => {
  let consoleLogSpy;
  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, 'log');
  });
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  test('there should be a method called "next" that is callable on any array', () => {
    const arr1 = [1, 2, 3, 4];
    expect(typeof arr1.next).toEqual('function');
    const arr2 = ['a', 'b', 'c', 'd'];
    expect(typeof arr2.next).toEqual('function');
  });

  test('the "next" method should log each index of the array sequentially starting with the first index', () => {
    const arrayana = ['thank', 'u', 'next'];

    arrayana.forEach((word, idx) => {
      arrayana.next();
      expect(consoleLogSpy.mock.calls[idx][0]).toEqual(word);
    });
  });
  xdescribe('extra credit', () => {
    let randomNumsArr;
    const rounds = 5;
    beforeEach(() => {
      randomNumsArr = [];
      for (let i = 0; i < rounds; i += 1) {
        const randomNum = Math.random() * 1000;
        randomNumsArr.push(randomNum);
      }
    });

    test('"next" should loop back around everytime it reaches the end of the array', () => {
      for (let i = 0; i < 2 * rounds; i += 1) {
        randomNumsArr.next();
      }
      const loopingLogs = consoleLogSpy.mock.calls.flat();
      expect(loopingLogs).toEqual(randomNumsArr.concat(randomNumsArr));
    });

    test('the "next" method should be chainable', () => {
      // testing for someArray.next().next() functionality
      let currNext = randomNumsArr;
      for (let i = 0; i < rounds; i += 1) {
        currNext = currNext.next();
      }

      const chainedLogs = consoleLogSpy.mock.calls.flat();
      expect(chainedLogs).toEqual(expect.arrayContaining(randomNumsArr));
      expect(chainedLogs.length).toEqual(randomNumsArr.length);
    });
  });
});
