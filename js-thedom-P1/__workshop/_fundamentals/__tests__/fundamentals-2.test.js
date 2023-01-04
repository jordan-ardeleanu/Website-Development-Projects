// We import (require) the function that we want to test.
const repeat = require("../fundamentals-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
