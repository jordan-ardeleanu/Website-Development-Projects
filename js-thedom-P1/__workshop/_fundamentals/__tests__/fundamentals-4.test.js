// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
