const { Messenger } = require('./unsubscribe');

describe('Messenger functionality', () => {
  it('Messenger takes an object and name param or throws error', () => {
    expect(() => new Messenger(45)).toThrow();
  });
  it('Messenger can unsubscribe', () => {
    const fsa = new Messenger({ name: 'FSA' });
    fsa.subscribe('2004-FLEX', (message) => {
      console.log(message);
    });
    const unsubscribe = fsa.subscribe('#general', (message) => {
      console.log(message);
    });
    fsa.publish('2004-FLEX', 'meeting @ 6:40');
    fsa.publish('#general', 'hello there!');
    unsubscribe();
    expect(fsa.getChannel('2004-FLEX')).toEqual([expect.any(Function)]);
    expect(fsa.getChannel('#general')).toEqual([]);
  });
  it('Messenger can unsubscribe 2 seperate channels', () => {
    const fsa = new Messenger({ name: 'FSA' });
    fsa.subscribe('2004-FLEX', (message) => {
      console.log(message);
    });
    const unsubscribe = fsa.subscribe('#general', (message) => {
      console.log(message);
    });
    const unsubscribe2 = fsa.subscribe('#stretches', (message) => {
      console.log(message);
    });
    fsa.publish('2004-FLEX', 'meeting @ 6:40');
    fsa.publish('#general', 'hello there!');
    fsa.publish('#stretches', 'stretch is open');
    unsubscribe();
    unsubscribe2();
    expect(fsa.getChannel('2004-FLEX')).toEqual([expect.any(Function)]);
    expect(fsa.getChannel('#general')).toEqual([]);
    expect(fsa.getChannel('#stretches')).toEqual([]);
  });
});
