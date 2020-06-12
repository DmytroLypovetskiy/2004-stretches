//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;
    return {};
  }
}

module.exports = { Chat };
