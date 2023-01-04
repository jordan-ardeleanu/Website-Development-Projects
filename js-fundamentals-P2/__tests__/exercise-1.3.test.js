const characterCount = require("../2-workshop/exercise-1.3");

test("Exercise 1.3", () => {
  expect(characterCount("wubba lubba dub dub")).toBe(19);
  expect(characterCount("ab c def")).toBe(8);
  expect(
    characterCount(
      "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!"
    )
  ).toBe(77);
});
