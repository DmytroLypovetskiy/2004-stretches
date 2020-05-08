const { DiceRoller } = require('./DiceRoller.js');

describe('Dice Roller', () => {
  test('it should accept two (valid) arguments, number of sides per die and total dice', () => {
    const myDice = new DiceRoller(3, 5);
    expect(myDice instanceof DiceRoller).toBeTruthy();
    expect(() => new DiceRoller(-1, 4)).toThrow();
    expect(() => new DiceRoller(10, 0)).toThrow();
    expect(() => new DiceRoller('one', 4)).toThrow();
    expect(() => new DiceRoller(10, 'four')).toThrow();
    expect(() => new DiceRoller(15)).toThrow();
  });

  test('it should contain a roll method that outputs the correct range of values when rolled', () => {
    const sides = 6;
    const numDice = 2;
    const sixBytwoDice = new DiceRoller(sides, numDice);

    for (const _ of Array(1000)) {
      const diceRoll = sixBytwoDice.roll();
      diceRoll.forEach(dieValue => {
        expect(dieValue % 1).toEqual(0);
        expect(dieValue).toBeGreaterThan(0);
        expect(dieValue).toBeLessThanOrEqual(sides);
        expect(diceRoll.length).toEqual(numDice);
      });
    }
  });

  test('it should output random values', () => {
    const singleDie = new DiceRoller(Number.MAX_SAFE_INTEGER, 1);
    const anotherSingleDie = new DiceRoller(Number.MAX_SAFE_INTEGER, 1);
    const firstRoll = singleDie.roll();
    const secondRoll = anotherSingleDie.roll();
    expect(firstRoll[0]).not.toEqual(secondRoll[0]);
  });

  test('it should contain a history property that outputs all of the previous rolls', () => {
    const checkHistory = new DiceRoller(1, 1);
    expect(checkHistory.history).toBeTruthy();
    const fiveByThreeDice = new DiceRoller(5, 3);
    const rollHistory = [];

    for (const _ of Array(500)) {
      rollHistory.push(fiveByThreeDice.roll());
    }

    expect(fiveByThreeDice.history).toEqual(rollHistory);
  });
  //Extra credit below. Remove the 'x' and save to activate this test spec
  xtest('the roll history, number of sides, and number of dice should be private', () => {
    const tenByThree = new DiceRoller(10, 3);
    const rollHistory = [];

    for (const _ of Array(2)) {
      rollHistory.push(tenByThree.roll());
    }

    expect(tenByThree.history).toEqual(rollHistory);
    tenByThree.history = [];
    expect(tenByThree.history).toEqual(rollHistory);
    const diceRollerProperties = Object.values(tenByThree);
    diceRollerProperties.forEach(val => {
      expect(typeof val).not.toEqual('number');
      expect(typeof val).not.toEqual('string');
      expect(typeof val).not.toEqual('object');
      expect(Array.isArray(val)).toBeFalsy();
    });
  });
});
