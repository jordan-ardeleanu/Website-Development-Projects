const findArmstrongNumbers = require("../2-workshop/exercise-17");

test("Exercise 17", () => {
  expect(findArmstrongNumbers(10, 10)).toStrictEqual([]);
  expect(findArmstrongNumbers(1000, 10000)).toStrictEqual([1634, 8208, 9474]);
  expect(findArmstrongNumbers(0, 1000)).toStrictEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    153,
    370,
    371,
    407,
  ]);
  expect(findArmstrongNumbers(0, 1000000)).toStrictEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    153,
    370,
    371,
    407,
    1634,
    8208,
    9474,
    54748,
    92727,
    93084,
    548834,
  ]);
});
