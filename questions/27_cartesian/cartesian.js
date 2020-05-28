const cartesian = (dir) => {
  if (!Array.isArray(dir)) throw new Error('Is not array');

  let x = 0;
  let y = 0;

  for (let i = 0; i < dir.length; i++) {
    if (dir[i] === 'n') x++;
    if (dir[i] === 's') x--;
    if (dir[i] === 'w') y++;
    if (dir[i] === 'e') y--;
  }

  if (x === 0 && y === 0) return "These directions don't go anywhere!";

  return {
    n: x > 0 ? x : 0,
    s: x < 0 ? x : 0,
    w: y > 0 ? y : 0,
    e: y < 0 ? y : 0,
  }
};

module.exports = {
  cartesian
};