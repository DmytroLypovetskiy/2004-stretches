// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice) {
    if (sides < 1 || numDice < 1 || isNaN(sides) || isNaN(numDice)) throw new Error('wrong input');
    this._sides = sides;
    this._numDice = numDice;
    this._history = [];
  }


  set history(roll) {
    if (roll.length) {
      this._history.push(roll)
    }
  }

  get history() {
    return this._history;
  }

  roll() {
    const roll = new Array(this._numDice).fill('').map(val => val = Math.floor(Math.random() * 6) + 1);
    this.history = roll;

    return roll;
  }
}

module.exports = {
  DiceRoller
};