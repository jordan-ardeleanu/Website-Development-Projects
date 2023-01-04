const { fullName, people } = require("../exercise-2");

test("Exercise 2", () => {
  expect(fullName(people)).toStrictEqual([
    "Alyssa P. Hacker",
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);
});
