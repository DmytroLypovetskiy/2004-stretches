const { Chat } = require('./chat');

describe('Chat functinality', () => {
  it('Lucy joins Prof', () => {
    const log = jest.fn();
    global.console = { log };
    const chat = new Chat();
    const prof = chat.join('prof', (message) => {
      console.log(`TO PROF: ${message}`);
    });
    const lucy = chat.join('lucy', (message) => {
      console.log(`TO LUCY: ${message}`);
    });
    expect(log).toHaveBeenCalledWith('TO PROF: lucy has joined chat!');
  });
  it('Then Curly joins Lucy and Prof', () => {
    const log = jest.fn();
    global.console = { log };
    const chat = new Chat();
    const prof = chat.join('prof', (message) => {
      console.log(`TO PROF: ${message}`);
    });
    const lucy = chat.join('lucy', (message) => {
      console.log(`TO LUCY: ${message}`);
    });
    const curly = chat.join('curly', (message) => {
      console.log(`TO CURLY: ${message}`);
    });
    expect(log.mock.calls).toEqual([
      ['TO PROF: lucy has joined chat!'],
      ['TO PROF: curly has joined chat!'],
      ['TO LUCY: curly has joined chat!'],
    ]);
  });
  it('They all chat!', () => {
    const log = jest.fn();
    global.console = { log };
    const chat = new Chat();
    const prof = chat.join('prof', (message) => {
      console.log(`TO PROF: ${message}`);
    });
    const lucy = chat.join('lucy', (message) => {
      console.log(`TO LUCY: ${message}`);
    });
    const curly = chat.join('curly', (message) => {
      console.log(`TO CURLY: ${message}`);
    });
    prof.talk('hi');
    lucy.talk('hello');
    curly.talk('whats up!');
    expect(log.mock.calls).toEqual([
      ['TO PROF: lucy has joined chat!'],
      ['TO PROF: curly has joined chat!'],
      ['TO LUCY: curly has joined chat!'],
      ['TO LUCY: prof says hi'],
      ['TO CURLY: prof says hi'],
      ['TO PROF: lucy says hello'],
      ['TO CURLY: lucy says hello'],
      ['TO PROF: curly says whats up!'],
      ['TO LUCY: curly says whats up!'],
    ]);
  });
});
