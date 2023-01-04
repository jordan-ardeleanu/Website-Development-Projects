// We import (require) the function that we want to test.
const addNumbers = require("../workshop/exercise-8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  expect(addNumbers(1, "bacon", 3, 4, 5)).toBe(51);
  expect(addNumbers()).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
