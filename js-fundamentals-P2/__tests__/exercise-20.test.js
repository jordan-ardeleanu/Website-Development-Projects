const every = require("../2-workshop/exercise-20");

test("Exercise 20", () => {
  expect(every(["Robin", "Bob", "Ric", "Jim"], (x) => x.length > 4)).toBe(
    false
  );
  expect(every([2, 4, 5, 6, 7, 8], (x) => x % 2 === 0)).toBe(false);
  expect(every([2, 4], (x) => x % 2 === 0)).toBe(true);
});
