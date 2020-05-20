const { delay } = require('./delay');

describe('delay', () => {
  test('It takes a string and a time (in milleseconds)', async () => {
    const delayedResult = await delay(
      'Somewhere over the rainbow, way up high.',
      2000
    );
    expect(typeof delayedResult).toEqual('string');
  });
  test('It uses set timeout', () => {
    jest.useFakeTimers();
    delay('And the dreams that you dream of, once in a lullaby', 1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('It returns a promise.', () => {
    jest.useFakeTimers();

    delay('test', 1000).then((x) => console.log(x));
    delay('testB', 500).then((x) => console.log(x));

    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
