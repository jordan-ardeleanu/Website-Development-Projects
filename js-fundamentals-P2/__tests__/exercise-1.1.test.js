const countNames = require("../2-workshop/exercise-1.1");

test("Exercise 1.1", () => {
  expect(countNames("Morty Antoine Smith")).toBe(3);
  expect(countNames("John Jim Smith Jones")).toBe(4);
  expect(countNames("a b c d e f g h i")).toBe(9);
});
