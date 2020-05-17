const { arrayexchange } = require('./arrayexchange');
describe('arrayexchange functionality', () => {
  it('arrayexchange should take two arrays as arguments or throw', () => {
    expect(() => arrayexchange(2, [a, b, c])).toThrow();
  });
  it('arrayexchange functionality should swap and reverse', () => {
    const a = ['1', '2', '3', '4', '5', '6', '7'];
    const b = ['a', 'b', 'c'];
    const mockFunc = jest.fn(arrayexchange);
    mockFunc(a, b);
    expect(a).toEqual(['c', 'b', 'a']);
    expect(b).toEqual(['7', '6', '5', '4', '3', '2', '1']);
  });
  it('arrayexchange functionality should swap and reverse', () => {
    const a = ['12', '15', '45', '70'];
    const b = ['bob', 'robert', 'steve'];
    const mockFunc = jest.fn(arrayexchange);
    mockFunc(a, b);
    expect(a).toEqual(['steve', 'robert', 'bob']);
    expect(b).toEqual(['70', '45', '15', '12']);
  });
  it('arrayexchange functionality should swap and reverse', () => {
    const a = ['paradise', 'in', 'sunday', 'another', 'Just'];
    const b = ['store', 'grocery', 'the', 'to', 'go', 'to', 'need', 'I'];
    const mockFunc = jest.fn(arrayexchange);
    mockFunc(a, b);
    expect(a).toEqual([
      'I',
      'need',
      'to',
      'go',
      'to',
      'the',
      'grocery',
      'store',
    ]);
    expect(b).toEqual(['Just', 'another', 'sunday', 'in', 'paradise']);
  });
});
