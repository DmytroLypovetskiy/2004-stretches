const { lockBox } = require('./lockBox');

describe('lockBox functionality', () => {
  test('lockbox should take two arguments -> code, message and fail if incorrect types', () => {
    expect(() => lockBox('123', 123)).toThrow();
  });
  test('lockBox should have methods -> modCode, modMessage, and revealMessage', () => {
    expect(lockBox(123, 'secret message')).toEqual({
      modCode: expect.any(Function),
      modMessage: expect.any(Function),
      revealMessage: expect.any(Function),
    });
  });
  test('modCode should modify initial code supplied', () => {
    let safe = lockBox(123, 'secret message');
    expect(safe.modCode(123, 456)).toEqual(456);
  });
  test('modMessage should change initial message supplied', () => {
    let safe = lockBox(123, 'secret message');
    expect(safe.modMessage(123, 'new secret message')).toEqual(
      'new secret message'
    );
  });
  test('revealMessage should fail if incorrect code', () => {
    let safe = lockBox(123, 'secret message');
    expect(() => safe.revealMessage(456)).toThrow();
  });
  test('revealMessage should retieve secret message', () => {
    let safe = lockBox(123, 'secret message');
    safe.modMessage(123, 'changed my mind');
    safe.modCode(123, 456);
    safe.modMessage(456, 'ummm .... gilled cheese');
    expect(safe.revealMessage(456)).toEqual('ummm .... gilled cheese');
  });
});
