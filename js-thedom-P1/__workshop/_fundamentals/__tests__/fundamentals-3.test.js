// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
