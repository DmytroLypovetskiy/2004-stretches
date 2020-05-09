const { splatter } = require('./splatter.js');

describe('Splatter should take multiple arguments and return the total value', () => {
  test('hard coded objects', () => {
    const smallSplat = splatter({ a: 1 }, { b: 5 }, { c: 3 }, { d: 4 });
    expect(smallSplat).toEqual(13);
  });
  test('random number of objects with multiple key value pairs', () => {
    const genArg = (multi) => {
      let ranArguments = [];
      let totalValue = 0;
      let argumentSize = Math.floor(Math.random() * multi) + 1;
      for (let j = 0; j < argumentSize; j++) {
        let [obj, val] = genObj(5);
        ranArguments.push(obj);
        totalValue += val;
      }
      return [ranArguments, totalValue];
    };
    const genObj = (multi) => {
      let parentObj = {};
      let objSize = Math.floor(Math.random() * multi) + 1;
      let value = 0;
      for (let i = 0; i < objSize; i++) {
        let temp = Math.floor(Math.random() * 20);
        let alpha = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        if (parentObj[alpha]) parentObj[alpha] += temp;
        else parentObj[alpha] = temp;
        value += temp;
      }
      return [parentObj, value];
    };
    let [argArray, answer] = genArg(10);
    const ranSplat = splatter(...argArray);
    expect(ranSplat).toEqual(answer);
  });
});
