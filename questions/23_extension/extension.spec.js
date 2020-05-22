const { extensions } = require('./extension');

describe('extension functionality', () => {
  it('extension takes a callback and gets called once', () => {
    const mockcb = jest.fn();
    extensions(mockcb)(3)(4);
    expect(mockcb).toHaveBeenCalledTimes(1);
  });
  it('extensions should take callback and numbers for the first and second invocation or throw error', () => {
    const minus = (x, y) => {
      return x - y;
    };
    const mockcb = jest.fn(minus);
    expect(() => extensions(4)).toThrow();
    expect(() => extensions(mockcb)('banana')).toThrow();
    expect(() => extensions(mockcb)(4)('banana')).toThrow();
  });
  it('given a callback... extension should multiple the first and second invocation', () => {
    const mul = (x, y) => {
      return x * y;
    };
    const mockcb = jest.fn(mul);
    const output = extensions(mockcb)(3)(4);
    expect(mockcb).toHaveBeenCalledTimes(1);
    expect(output).toEqual(12);
  });
  it('given a different callback... extension should add the first and second invocation', () => {
    const add = (x, y) => {
      return x + y;
    };
    const mockcb = jest.fn(add);
    const output = extensions(mockcb)(5)(20);
    expect(mockcb).toHaveBeenCalledTimes(1);
    expect(output).toEqual(25);
  });
});
