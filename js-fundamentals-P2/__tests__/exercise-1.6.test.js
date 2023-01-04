const removeStringFromArray = require("../2-workshop/exercise-1.6");

test("Exercise 1.6", () => {
  expect(
    removeStringFromArray(["I", "bacon", "you", "she"], "bacon")
  ).toStrictEqual(["I", "you", "she"]);
  expect(removeStringFromArray(["5", "7", "9", "100"], "100")).toStrictEqual([
    "5",
    "7",
    "9",
  ]);
});
