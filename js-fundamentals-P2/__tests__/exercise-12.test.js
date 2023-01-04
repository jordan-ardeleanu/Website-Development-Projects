const getLetterGrade = require("../2-workshop/exercise-12");

test("Exercise 12", () => {
  expect(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65])).toBe("D");
  expect(getLetterGrade([90, 80, 40, 50, 60, 100])).toBe("C");
  expect(getLetterGrade([34])).toBe("F");
});
