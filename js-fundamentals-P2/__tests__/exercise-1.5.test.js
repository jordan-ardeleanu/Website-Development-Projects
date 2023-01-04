const decodeMessage = require("../2-workshop/exercise-1.5");

test("Exercise 1.5", () => {
  expect(decodeMessage("I anotm tbaconhe walrus.", ["not", "bacon"])).toBe(
    "I am the walrus."
  );
  expect(
    decodeMessage(
      "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!",
      [
        "summer",
        "bacon",
        "scary",
        "intergalactic",
        "jerry",
        "morty",
        "beth",
        "family",
      ]
    )
  ).toBe("look at me, I'm Pickle Rick!");
});
