const { chainCalc } = require('./calc');

describe('chainCalc functionality', () => {
  it('chainCalc takes a number or throw', () => {
    expect(() => new chainCalc('a')).toThrow();
  });
  it('chainCalc can add', () => {
    const simpleCalc2 = new chainCalc(5);
    simpleCalc2.add(1);
    expect(simpleCalc2.result).toEqual(6);
  });
  it('chainCalc can subtract', () => {
    const simpleCalc2 = new chainCalc(5);
    simpleCalc2.add(1);
    simpleCalc2.sub(2);
    expect(simpleCalc2.result).toEqual(4);
  });
  it('chainCalc can multiply', () => {
    const simpleCalc2 = new chainCalc(5);
    simpleCalc2.add(1);
    simpleCalc2.sub(2);
    simpleCalc2.mul(3);
    expect(simpleCalc2.result).toEqual(12);
  });
  it('chainCalc is chainable', () => {
    const simpleCalc2 = new chainCalc(5);
    simpleCalc2.add(1).sub(2).mul(4);
    expect(simpleCalc2.result).toEqual(16);
  });
});
