const calculateAverage = require("../2-workshop/exercise-4");

test("Exercise 4", () => {
  expect(calculateAverage(76, 60, 83, 100, 78)).toBe(79);
  expect(calculateAverage(3, 1, 1, 1, 1)).toBe(1);
});
