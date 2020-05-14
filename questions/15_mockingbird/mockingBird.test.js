const { repeater } = require('./mockingBird');
describe('Learn how to write mock functions!', () => {
  // Mocks a.k.a 'spies' allow you to peek into what is happening inside of a function and/or control the input/output of said function.
  test('intro to mocks', () => {
    // we can wrap any function in jest.fn() to create a mock
    const capitalizeWord = (word) => {
      return word.toUpperCase();
    };
    capitalizeWordMock = jest.fn(capitalizeWord);

    // uncomment the console.log to see all the properties that jest adds to a mock
    // console.log(
    //   '**************** capitalizeWordMock properties \n',
    //   capitalizeWordMock,
    // );

    // lets run the function a few times
    capitalizeWordMock('i');
    capitalizeWordMock('love');
    capitalizeWordMock('javascript');

    // the .mock property is where the information on calls and results lives
    // mock functions retain a history of every time they are called

    // console.log(
    //   '********** capitalizeWordMock.mock \n',
    //   capitalizeWordMock.mock.instances,
    // );

    const { calls, results } = capitalizeWordMock.mock;

    // we can test all the inputs
    expect(calls).toEqual(
      expect.arrayContaining([['i'], ['love'], ['javascript']])
    );

    // and all the outputs
    expect(results).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ value: 'I' }),
        expect.objectContaining({ value: 'LOVE' }),
        expect.objectContaining({ value: 'JAVASCRIPT' }),
      ])
    );

    // even how many times its been called
    expect(capitalizeWordMock).toHaveBeenCalledTimes(3);
  });
  describe('try it out', () => {
    test('the repeater function works as intended', () => {
      const phrase = 'hello world';
      const numberOfRepeats = Math.floor(Math.random() * 10 + 1);
      const brokenRecord = () => {
        return phrase;
      };

      const repeaterOutput = repeater(brokenRecord, numberOfRepeats);
      const expectedOutput = Array(numberOfRepeats).fill(phrase);

      expect(repeaterOutput).toEqual(expectedOutput);
    });

    test('now test random outputs using mocks', () => {
      const numberOfRepeats = Math.floor(Math.random() * 10 + 10);

      const bird = () => {
        const sounds = [
          'chirp',
          'tweet',
          'blop',
          'glorp',
          '🌈you are awesome🐥',
        ];

        const randomIdx = Math.floor(Math.random() * sounds.length);

        return sounds[randomIdx];
      };

      // create a mock for the bird function
      const birdMock = null;

      const repeaterOutput = repeater(birdMock, numberOfRepeats);

      // the expected output will be an array of return values from birdMock.
      const expectedOutput = [];

      // fill out expectedOutput using our mock return values
      birdMock.mock.results.forEach();

      expect(repeaterOutput).toEqual(expectedOutput);
    });
  });
});
