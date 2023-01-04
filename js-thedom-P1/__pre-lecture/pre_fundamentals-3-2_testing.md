# Fundamentals: Testing

A test is a piece of code that will validate another piece of code. It will run it to be certain that it is behaving properley, that it \_return_s the right value given an input.

```js
// Example
const strLength = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.length;
};

// A test
test("Exercise 0", () => {
  expect(strLength("max")).toBe(3);
  expect(strLength("abcdefghijklmnop")).toBe(16);
  expect(strLength("This is a test case.")).toBe(20);
  expect(strLength("")).toBe(undefined);
  expect(strLength(256)).toBe(undefined);
  expect(strLength(["abcdefghijklmnop"])).toBe(undefined);
});
```

Run the test in the VS Code Terminal with `yarn test exercise-3.0`

## Exercises

Take a look at these exercises, can you fix the errors?

Copy of the code is provided below but feel free to do the work in [Codesandbox](https://codesandbox.io/s/m2d3-testing-exercise-wjtbe?file=/index.js)

```js
// Exercise 1
const getLetterGrade = (score) => {
  if (score < 60) {
    return "F";
  } else if (score < 75) {
    return "C";
  } else if (score < 90) {
    return "B"
  } else {
    return "A";
}

const expect = (result, value) => {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(getLetterGrade(81), "B");
expect(getLetterGrade(62), "C");
```

---

```js
// Exercise 2
const doesNameStartWithLetter = (name, letter) => {
  let firstLetter = name[0];
  if ((firstLetter = letter)) {
    return true;
  } else {
    return false;
  }
}

const expect = (result, value) => {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(doesNameStartWithLetter('Josh', 'J'), true);
expect(doesNameStartWithLetter('Josh', 'A'), false);
```

### Exception, where are you?

There are cases when there is no error message. Or that the error message is wrong.

Possible causes are

- Infinite loop
- Error is caught somewhere else
- Bug is in the build process (covered later in the course)

#### Finding Exceptions

The error message is missing perhaps 5% of the time (rough). This makes it hard to find the bug. This is where using `console.log()` can really help.

Learning to `console.log` effectively is an essential part of becoming a developer.

It allows you to be independent.
