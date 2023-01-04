const findNumbers = require("../2-workshop/exercise-16");

test("Exercise 16", () => {
  expect(findNumbers(0, 1000)).toStrictEqual([0, 1, 153, 370, 371, 407]);
  expect(findNumbers(0, 1)).toStrictEqual([0, 1]);
  expect(findNumbers(100, 100000)).toStrictEqual([153, 370, 371, 407]);
  expect(findNumbers(5, 6)).toStrictEqual([]);
});
