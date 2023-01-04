const countChar = require("../2-workshop/exercise-14");

test("Exercise 14", () => {
  expect(countChar("BananaBabyBubbles", "a")).toBe(4);
  expect(countChar("BBBBBBbBBBB", "b")).toBe(1);
  expect(countChar("B B B b c BBB cccc BBBBBBBBBBB", "b")).toBe(1);
  expect(countChar("acdefg", "b")).toBe(0);
});
