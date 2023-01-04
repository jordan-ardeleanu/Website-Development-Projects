// We import (require) the function that we want to test.
const calculator = require("../fundamentals-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
