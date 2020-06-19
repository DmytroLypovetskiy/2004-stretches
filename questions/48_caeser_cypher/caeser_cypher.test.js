const { encryptString } = require('./caeser_cypher');

test('it should be able to shift letters', () => {
  expect(encryptString('abc', 1)).toEqual('bcd');
  expect(encryptString('JavaScript', 3)).toEqual('MdydVfulsw');
});

test('it should be able to shift numbers', () => {
  expect(encryptString('111', 4)).toEqual('555');
  expect(encryptString('264', 2)).toEqual('486');
});

test('it should be able to accept a negative shift value', () => {
  expect(encryptString('mqblhw', -1)).toEqual('lpakgv');
  expect(encryptString('986675', -4)).toEqual('542231');
});

test('it should be able to wrap around forwards and backwards', () => {
  expect(encryptString('z956qau', 29)).toEqual('c845tdx');
  expect(encryptString('password123', -266)).toEqual('jummqilx567');
});

test('it should throw an error if there are non alphanumeric characters in the string', () => {
  expect(() => {
    encryptString('p@ssword', 10);
  }).toThrow();
  expect(() => {
    encryptString('user_123');
  }).toThrow();
  expect(() => {
    encryptString('hello world');
  }).toThrow();
});
