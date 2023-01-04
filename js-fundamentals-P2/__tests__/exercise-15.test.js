const filterNonUnique = require("../2-workshop/exercise-15");

test("Exercise 15", () => {
  expect(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8])).toStrictEqual([
    1,
    2,
    4,
    5,
    6,
    8,
  ]);
  expect(filterNonUnique(["bacon", "baby", "bacon"])).toStrictEqual(["baby"]);
  expect(
    filterNonUnique([true, true, false, false, true, null])
  ).toStrictEqual([null]);
  expect(filterNonUnique([1, 1, 1, 1])).toStrictEqual([]);
  expect(filterNonUnique([])).toStrictEqual([]);
});
