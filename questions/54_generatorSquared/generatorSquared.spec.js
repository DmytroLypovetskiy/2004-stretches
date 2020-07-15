const { sqauredGen } = require('./generatorSquared');

describe('squaredGen is a generator that squares its input', () => {
  it('squaredGen receives 2 arguments and both should be numbers', () => {
    expect(sqauredGen.length).toEqual(2);
  });
  it('Can call .next and receive correct value', () => {
    const specGen = sqauredGen(0, 5);
    specGen.next();
    expect(specGen.next().value).toEqual(4);
  });
  it('Can call .next multiple times and receive correct values', () => {
    const specGen = sqauredGen(5, 10);
    expect(specGen.next().value).toEqual(36);
    expect(specGen.next().value).toEqual(49);
    expect(specGen.next().value).toEqual(64);
    expect(specGen.next().value).toEqual(81);
    expect(specGen.next().value).toEqual(100);
  });
  it('receives true if beyond max', () => {
    const specGen = sqauredGen(0, 2);
    specGen.next();
    specGen.next();
    expect(specGen.next().done).toEqual(true);
  });
});
