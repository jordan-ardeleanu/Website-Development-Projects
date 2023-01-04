const greetLong = require("../2-workshop/exercise-9");

test("Exercise 9", () => {
  expect(greetLong(["Scott", "Bob", "Ric", "Jim"])).toStrictEqual([
    "Hello Scott",
  ]);
  expect(greetLong(["Bob", "Ric", "Jim"])).toStrictEqual([]);
  expect(greetLong([])).toStrictEqual([]);
});
