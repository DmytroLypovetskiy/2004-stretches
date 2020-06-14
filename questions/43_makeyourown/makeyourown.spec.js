const {
  makeyourown
} = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('makeyourown takes 2 arguments.', () => {
    expect(makeyourown.length).toEqual(2);
  });
  it('should take an array and callback', () => {
    expect(() => makeyourown({}, 'string')).toThrow();
  });
  it('it returns a new array', () => {
    const arr = [];
    const cb = () => {};
    const result = makeyourown(arr, cb);

    expect(result).toEqual(expect.any(Array))
  });
  it('it doubles array', () => {
    const arr = [1, 2, 3];
    const cb = (e) => e * 2;
    const doubled = makeyourown(arr, cb);

    expect(doubled).toEqual([2, 4, 6])
  });
  it('it rounds array', () => {
    const arr = [1.2, 2.6, 3.6];
    const cb = (e) => Math.round(e);
    const doubled = makeyourown(arr, cb);

    expect(doubled).toEqual([1, 3, 4])
  });
});