const { btownbake } = require('./btownbakery');

describe('btownbake functionality', () => {
  it('btownbake takes two arguments and both should be Objects or throw', () => {
    expect(typeof btownbake).toEqual('function');
    expect(btownbake.length).toEqual(2);
    expect(() => btownbake('hey', { b: 2 })).toThrow();
    expect(() => btownbake({ a: 1 }, 'whatsup')).toThrow();
  });
  it('btownbake returns the correct number of cakes when given recipe and supplies', () => {
    let recipe = { flour: 500, sugar: 200, eggs: 1 };
    let supplies = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    expect(btownbake(recipe, supplies)).toEqual(2);
  });
  it('btownbake returns the correct number of cakes when given diffrent recipe and supplies', () => {
    let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    let supplies = { sugar: 500, flour: 2000, milk: 2000 };
    expect(btownbake(recipe, supplies)).toEqual(0);
  });
  it('btownbake returns the correct number of cakes when given diffrent recipe and supplies', () => {
    let recipe = { pecans: 3, bananas: 2, sugar: 150, milk: 100, eggs: 2 };
    let supplies = { pecans: 1, bananas: 1, sugar: 58, milk: 21, eggs: 1 };
    expect(btownbake(recipe, supplies)).toEqual(0);
  });
});
