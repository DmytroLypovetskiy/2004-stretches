//YOU WILL BE EDITING THIS CODE

class CoffeeShop {
  constructor() {
    this.pendingOrders = [];
    this.completedOrders = [];
    this.menu = ['mocha', 'latte', 'flat-white', 'drip', 'espresso'];
  }

  inputOrder(str) {
    this.pendingOrders.push(str);
  }

  makeCoffee() {
    const cofeeOrder = this.pendingOrders.shift();

    this.completedOrders.push(cofeeOrder);
  }

  printMenu() {
    return this.menu;
  }
}

module.exports = {
  CoffeeShop
};