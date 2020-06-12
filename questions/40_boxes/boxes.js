class Box {
  constructor(color = '', capacity = 0, contents = []) {
    this.color = color;
    this.capacity = capacity;
    this.contents = contents;
  }
  pack(color = '', capacity = 0, contents = []) {
    const box = new Box(color, capacity, contents);
    this.contents.push(box)
  }

}

module.exports = {
  Box
};