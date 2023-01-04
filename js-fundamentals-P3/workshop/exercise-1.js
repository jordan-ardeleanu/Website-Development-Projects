// Exercise 1
// ---------------
// Write an arrow function that returns the first character
// of the string that is passed to it.
//
// - If it's an empty string (''), return undefined.

const firstLetter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.slice(0, 1)
}

// We need to export the function in order for our unit test to have access to it.
module.exports = firstLetter;
