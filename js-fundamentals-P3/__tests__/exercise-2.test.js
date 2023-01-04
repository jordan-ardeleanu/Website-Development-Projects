// We import (require) the function that we want to test.
const lastCharacter = require("../workshop/exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(lastCharacter("max")).toBe("x");
  expect(lastCharacter("bacon")).toBe("n");
  expect(lastCharacter(23232)).toBe(undefined);
  expect(lastCharacter("")).toBe(undefined);
  // add more tests here...
});

// Run your test by typing yarn test fundamentals-3.2 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
