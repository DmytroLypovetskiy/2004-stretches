const { cache } = require("./cache");

describe("Cache", () => {
  test("it should take a function and return a function", () => {
    expect(typeof cache(() => {}) === "function").toBe(true);
  });

  test("it should throw if argument is not a function", () => {
    const stringCall = () => cache("not a function");
    const numberCall = () => cache(42);
    const arrCall = () => cache([]);

    expect(stringCall).toThrow("Input must be a function.");
    expect(numberCall).toThrow("Input must be a function.");
    expect(arrCall).toThrow("Input must be a function.");
  });

  test("the returned function should invoke the originally passed in function", () => {
    const adder = a => a + 10;
    const mockAdd = jest.fn(adder);
    const cachedAdder = cache(mockAdd);

    const result1 = cachedAdder(13);
    const result2 = cachedAdder(14);
    const result3 = cachedAdder(2);
    const result4 = cachedAdder(29);

    expect(mockAdd.mock.calls.length).toBe(4);
    expect(result1).toBe(23);
    expect(result2).toBe(24);
    expect(result3).toBe(12);
    expect(result4).toBe(39);
  });

  test("if the returned function is called with the same argument more than once, then the original callback is not called.", () => {
    const adder = a => a + 5;
    const mockAdd = jest.fn(adder);
    const cachedAdder = cache(mockAdd);

    const result = cachedAdder(12);
    const sameResult = cachedAdder(12);
    cachedAdder(12);
    cachedAdder(12);
    cachedAdder(12);
    cachedAdder(12);

    const result2 = cachedAdder(99);
    const result3 = cachedAdder(30);

    expect(result).toBe(17);
    expect(sameResult).toBe(17);

    expect(result2).toBe(104);
    expect(result3).toBe(35);
    expect(mockAdd.mock.calls.length).toBe(3);
  });

  // EXTRA CREDIT
  test("if the returned function is called with the same arguments more than once, then the original callback is not called.", () => {
    const adder = (a, b, c) => a + b + c;
    const mockAdd = jest.fn(adder);
    const cachedAdder = cache(mockAdd);

    const result = cachedAdder(12, 14, 4);
    const sameResult = cachedAdder(12, 14, 4);
    const alsoSameResult = cachedAdder(12, 14, 4);

    const result2 = cachedAdder(12, 14, 2);

    const result3 = cachedAdder(2, 4, 3);

    expect(result).toBe(30);
    expect(sameResult).toBe(30);
    expect(alsoSameResult).toBe(30);

    expect(result2).toBe(28);
    expect(result3).toBe(9);

    expect(mockAdd.mock.calls.length).toBe(3);
  });
});
