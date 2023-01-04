const calculateAverage = require("../2-workshop/exercise-11");

test("Exercise 11", () => {
  expect(calculateAverage([76, 60, 83, 100, 78])).toBe(79);
  expect(calculateAverage([20, 30, 40, 50, 60, 1])).toBe(34);
  expect(calculateAverage([34])).toBe(34);
});
