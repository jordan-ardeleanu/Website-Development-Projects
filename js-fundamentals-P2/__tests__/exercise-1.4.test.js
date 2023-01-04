const removeMiddleName = require("../2-workshop/exercise-1.4");

test("Exercise 1.4", () => {
  expect(removeMiddleName("Morty Antoine Smith")).toBe("Morty Smith");
  expect(removeMiddleName("Rick Sanchez")).toBe("Rick Sanchez");
  expect(removeMiddleName("Prince")).toBe("Prince");
  expect(removeMiddleName("Morty Antoine BBB CCC DDD Smith")).toBe(
    "Morty Smith"
  );
});
