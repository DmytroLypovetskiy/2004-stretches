// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(arr) {
    if (!Array.isArray(arr)) throw new Error('Not an array');
    this.arr = arr;
  }
  next() {
    if (this.arr.length === 0) {
      return {
        done: true,
        value: undefined
      }
    }
    const value = this.arr.shift();

    return {
      done: false,
      value
    }
  }
}

module.exports = {
  Iterator
};