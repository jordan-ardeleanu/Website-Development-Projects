const { avgAge, people } = require("../exercise-1");

test("Exercise 1", () => {
  expect(avgAge(people)).toBe(31);
});
