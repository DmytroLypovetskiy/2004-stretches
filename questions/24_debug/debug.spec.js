const { CoffeeShop } = require('./debug');

describe('Someone wrote this class in a hurry! It needs to be edited and debugged.', () => {
  test('It should be able to return pendingOrders,completedOrders, and the menu', () => {
    const Starbux = new CoffeeShop();
    const shopProperties = Object.keys(Starbux);
    expect(shopProperties.includes('menu')).toBe(true);
  });

  test('It should be able to add orders to pending orders', () => {
    const LightBlueBottle = new CoffeeShop();
    LightBlueBottle.inputOrder('latte');

    expect(LightBlueBottle.pendingOrders.length).toBe(1);
  });

  test('It should be able to take orders from pending orders and add them to completed orders', () => {
    const CafeKindaGrumpy = new CoffeeShop();
    CafeKindaGrumpy.inputOrder('latte');
    CafeKindaGrumpy.inputOrder('drip');
    CafeKindaGrumpy.inputOrder('espresso');
    CafeKindaGrumpy.inputOrder('mocha');

    expect(CafeKindaGrumpy.pendingOrders.length).toBe(4);

    CafeKindaGrumpy.makeCoffee();
    expect(CafeKindaGrumpy.pendingOrders.length).toBe(3);
    expect(CafeKindaGrumpy.completedOrders.length).toBe(1);
    expect(CafeKindaGrumpy.completedOrders[0]).toBe('latte');
  });
  test('It should print the menu correctly.', () => {
    const Joesephs = new CoffeeShop();

    const returnedMenu = Joesephs.printMenu();

    expect(returnedMenu).toEqual([
      'mocha',
      'latte',
      'flat-white',
      'drip',
      'espresso',
    ]);
  });
});
