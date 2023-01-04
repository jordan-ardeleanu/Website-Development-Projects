const removeEvens = require("../2-workshop/exercise-6");

test("Exercise 6", () => {
  expect(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
    1,
    3,
    5,
    7,
    9,
  ]);
  expect(removeEvens([])).toStrictEqual([]);
  expect(removeEvens([2, 4, 6, 8])).toStrictEqual([]);
});
