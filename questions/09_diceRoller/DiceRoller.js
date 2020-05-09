// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice) {
    if (sides < 1 || numDice < 1 || isNaN(sides) || isNaN(numDice)) throw new Error('wrong input');
    this._sides = sides;
    this._numDice = numDice;
    this._history = []

  }
  set sides(sides) {
    this._sides = sides;
  }
  getSides(sides) {
    return sides;
  }
  set numDice(numDice) {
    this._numDice = numDice;
  }
  roll() {
    const dices = this._numDice;
    const roll = new Array(dices).fill('').map(dice => dice = Math.floor(Math.random() * 6) + 1);

    this.history = roll;

    return roll;
  }
  set history(roll) {
    if (roll.length) {
      this._history.push(roll);
    }
  }
  get history() {
    return this._history;
  }

}

module.exports = {
  DiceRoller
};