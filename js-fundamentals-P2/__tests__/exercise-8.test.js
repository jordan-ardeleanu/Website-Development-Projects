const greet = require("../2-workshop/exercise-8");

test("Exercise 8", () => {
  expect(greet(["David", "Billy", "Lisa", "Jennifer"])).toStrictEqual([
    "Hello David",
    "Hello Billy",
    "Hello Lisa",
    "Hello Jennifer",
  ]);
  expect(greet(["Rick"])).toStrictEqual(["Hello Rick"]);
  expect(greet([])).toStrictEqual([]);
});
