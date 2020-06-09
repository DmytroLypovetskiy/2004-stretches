const { sortOrder } = require("./sortOrder");

describe("Sort Order", () => {
  test("it should return an array", () => {
    const data = [
      { sortOrder: 4, name: "Russell" },
      { sortOrder: 2, name: "Mark" },
      { sortOrder: 1, name: "Eliot" },
      { sortOrder: 3, name: "Ryan" }
    ];
    expect(Array.isArray(sortOrder(data, "sortOrder", "name"))).toBe(true);
  });

  test("it should sort by the given (number) key", () => {
    const data = [
      { sortOrder: 4, name: "Russell" },
      { sortOrder: 2, name: "Mark" },
      { sortOrder: 1, name: "Eliot" },
      { sortOrder: 3, name: "Ryan" }
    ];

    expect(sortOrder(data, "sortOrder", "name")).toEqual([
      "Eliot",
      "Mark",
      "Ryan",
      "Russell"
    ]);
  });

  test("it should sort by given (number) key", () => {
    const data = [
      { sorts: 40, funnyName: "rUssEll" },
      { sorts: 20, funnyName: "mArk" },
      { sorts: 1, funnyName: "ElIOt" },
      { sorts: 300, funnyName: "ryAn" }
    ];

    expect(sortOrder(data, "sorts", "funnyName")).toEqual([
      "ElIOt",
      "mArk",
      "rUssEll",
      "ryAn"
    ]);
  });

  test("it should on a given (letter) key", () => {
    const data = [
      { sorts: "b", funnyName: "rUssEll" },
      { sorts: "c", funnyName: "mArk" },
      { sorts: "a", funnyName: "ElIOt" },
      { sorts: "d", funnyName: "ryAn" }
    ];

    expect(sortOrder(data, "sorts", "funnyName")).toEqual([
      "ElIOt",
      "rUssEll",
      "mArk",
      "ryAn"
    ]);
  });
});
