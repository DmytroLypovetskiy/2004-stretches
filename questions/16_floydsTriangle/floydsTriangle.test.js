const { floydsTriangle } = require('./floydsTriangle');

const zeRows = '';
const oneRow = '1';
const threeRows = `1
23
456`;
const tenRows = `1
23
456
78910
1112131415
161718192021
22232425262728
2930313233343536
373839404142434445
46474849505152535455`;

describe('Floyds Triangle', () => {
  test('it should return a string', () => {
    expect(typeof floydsTriangle()).toEqual('string');
  });
  test('it should output the correct triangle', () => {
    expect(floydsTriangle(0)).toEqual(zeRows);
    expect(floydsTriangle(1)).toEqual(oneRow);
    expect(floydsTriangle(3)).toEqual(threeRows);
    expect(floydsTriangle(10)).toEqual(tenRows);
  });
  test('it should not be hard coded', () => {
    const randomNumRows = Math.ceil(Math.random() * 1000) + 1000;
    const randomTriangle = floydsTriangle(randomNumRows);
    const totalNums = (randomNumRows / 2) * (1 + randomNumRows);
    let lastRow = '';
    for (let i = totalNums - randomNumRows + 1; i <= totalNums; i += 1) {
      lastRow += i.toString();
    }
    const indexOfLastRow = randomTriangle.indexOf(lastRow);

    expect(indexOfLastRow).toBeGreaterThanOrEqual(1);
    expect(indexOfLastRow + lastRow.length).toEqual(randomTriangle.length);
  });
});
