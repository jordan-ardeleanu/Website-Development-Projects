// We import (require) the function that we want to test.
const sum = require("../workshop/exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([1, 1, 1])).toBe(3);
  expect(sum(["3", "4", "5"])).toBe(undefined);
  expect(sum([3, "bacon", 5])).toBe(undefined);
  expect(sum([])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
