const arrOFNames = require("../2-workshop/exercise-1.2");

test("Exercise 1.2", () => {
  expect(arrOFNames("a, b, c, d, e, f, g")).toStrictEqual([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
  ]);
  expect(arrOFNames("one, two, Bango, Jim")).toStrictEqual([
    "one",
    "two",
    "Bango",
    "Jim",
  ]);
});
