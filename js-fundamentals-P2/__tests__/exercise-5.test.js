const itemIsPresent = require("../2-workshop/exercise-5");

test("Exercise 5", () => {
  expect(itemIsPresent([1, 2, 3, 4, 5], 2)).toBe(true);
  expect(itemIsPresent([1, 2, 3, 4, 5], 6)).toBe(false);
  expect(itemIsPresent(["one", "three", "five", "alive"], "morty")).toBe(false);
  expect(itemIsPresent([], "bacon")).toBe(false);
});
