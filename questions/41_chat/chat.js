//	Chat is almost complete - solve the last spec

const talk = (msg) => {
  return msg;
}

class Chat {
  constructor() {
    this.listeners = {};
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;
    const _this = this;

    return {
      talk(msg) {
        Object.values(_this.listeners).forEach((listener, idx) => {
          const name = Object.keys(_this.listeners)[idx]
          if (name !== str) {
            listener(`${str} says ${msg}`)
          }
        });
      }
    }
  }
}

module.exports = {
  Chat
};