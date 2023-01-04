// Exercise 2
// ---------------
// Write an arrow function that returns the LAST character
// of the string that is passed to it.
//
// - If it's an empty string, return `undefined`
// - If it's not a string, return `undefined`

const lastCharacter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.slice(str.length -1, str.length)
}

// We need to export the function in order for our unit test to have access to it.
module.exports = lastCharacter;
