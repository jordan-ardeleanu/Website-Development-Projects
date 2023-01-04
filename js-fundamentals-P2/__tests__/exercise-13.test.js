const countBs = require("../2-workshop/exercise-13");

test("Exercise 13", () => {
  expect(countBs("BananaBabyBubbles")).toBe(3);
  expect(countBs("BBBBBBbBBBB")).toBe(10);
  expect(countBs("B B B b c BBB cccc BBBBBBBBBBB")).toBe(17);
  expect(countBs("acdefg")).toBe(0);
});
