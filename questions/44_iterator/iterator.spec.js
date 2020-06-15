const { Iterator } = require('./iterator');

describe('Iterator functionality', () => {
  it('Iterator should take an array or throw', () => {
    expect(() => new Iterator(45)).toThrow();
  });
  it('Iterator moves through provided Array and gets logged', () => {
    const it = new Iterator(['Elliot', 'Deanna', 'Thompson']);
    expect(it.next()).toEqual({ done: false, value: 'Elliot' });
    expect(it.next()).toEqual({ done: false, value: 'Deanna' });
    expect(it.next()).toEqual({ done: false, value: 'Thompson' });
  });
  it('Iterator moves through provided Array and outputs "done" when complete', () => {
    const it = new Iterator(['Elliot', 'Deanna', 'Thompson']);
    expect(it.next()).toEqual({ done: false, value: 'Elliot' });
    expect(it.next()).toEqual({ done: false, value: 'Deanna' });
    expect(it.next()).toEqual({ done: false, value: 'Thompson' });
    expect(it.next()).toEqual({ done: true, value: undefined });
  });
});
