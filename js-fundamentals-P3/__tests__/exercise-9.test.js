// We import (require) the function that we want to test.
const uniqueElements = require("../workshop/exercise-9");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 9", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  expect(uniqueElements([1, 2, 3], [3, 2, 1])).toStrictEqual([]);
  expect(uniqueElements(2, "bacon")).toStrictEqual(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
