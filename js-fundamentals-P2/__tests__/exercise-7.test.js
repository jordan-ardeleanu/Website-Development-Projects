const keepLong = require("../2-workshop/exercise-7");

test("Exercise 7", () => {
  expect(
    keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
  ).toStrictEqual(["Cyborg", "Batman", "Superman", "Aquaman"]);
  expect(keepLong(["aaaa", "aa", "aaa", "", "a"])).toStrictEqual([]);
  expect(keepLong([])).toStrictEqual([]);
});
