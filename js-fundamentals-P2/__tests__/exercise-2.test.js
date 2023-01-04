const getMax = require("../2-workshop/exercise-2");

test("Exercise 2", () => {
  expect(getMax(12, 9)).toBe(12);
  expect(getMax(0, 4)).toBe(4);
});
