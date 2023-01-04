const map = require("../2-workshop/exercise-18");

test("Exercise 18", () => {
  expect(map(["Rick", "Morty"], (x) => x.toUpperCase())).toStrictEqual([
    "RICK",
    "MORTY",
  ]);
  expect(map(["Robin", "Bob", "Ric", "Jim"], (x) => x)).toStrictEqual([
    "Robin",
    "Bob",
    "Ric",
    "Jim",
  ]);
  expect(map(["Robin", "Bob", "Ric"], (x) => x.length)).toStrictEqual([
    5,
    3,
    3,
  ]);
});
