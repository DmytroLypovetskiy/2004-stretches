// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.history = [];
  }
  setState(updatedProp) {
    this.history.push(this.state);

    this.state = {
      ...this.state,
      ...updatedProp
    }
    return this.state;
  }
  goBack() {
    this.state = this.history.pop();
  }
}

module.exports = {
  StatefulThing
};