const { digitalRoot } = require('./digitalRoot');

describe('digital root', () => {
  test('Is a class with a method root', () => {
    const newDigRoot = new digitalRoot();
    expect(typeof newDigRoot.root).toEqual('function');
  });
  test('Given a positive integer, it returns a positive integer.', () => {
    const digRootInstance = new digitalRoot();
    const result = digRootInstance.root(22);
    expect(typeof result).toEqual('number');
    expect(result).toBeGreaterThan(0);
  });
  test('It uses recursion.', () => {
    const anotherDigRootInstance = new digitalRoot();
    digRootSpy = jest.spyOn(anotherDigRootInstance, 'root');
    anotherDigRootInstance.root(132189);

    expect(digRootSpy.mock.calls.length).toEqual(3);
  });
  test('It returns the correct digital root.', () => {
    const lastDigRootInstance = new digitalRoot();

    const result = lastDigRootInstance.root(493193);

    expect(result).toEqual(2);
  });
});
