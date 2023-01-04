const filter = require("../2-workshop/exercise-19");

test("Exercise 18", () => {
  expect(
    filter(["Robin", "Bob", "Ric", "Jim"], (x) => x.length > 4)
  ).toStrictEqual(["Robin"]);
  expect(filter([2, 4, 5, 6, 7, 8], (x) => x % 2 === 0)).toStrictEqual([
    2,
    4,
    6,
    8,
  ]);
});
