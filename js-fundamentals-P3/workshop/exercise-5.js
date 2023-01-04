// Exercise 5
// ---------------
// Write an arrow function that returns the character at the specified position in the
// string.

// - If str is not a string, return undefined.
// - If there is no character at the provided index, return undefined.

const getLetterAtIndex = (str, index) => {
  if (typeof str !== "string" || str.length === 0 || index > str.length) {
    return undefined;
  }
  let char = str.slice(index, index + 1);

  return char;
}

// We need to export the function in order for our unit test to have access to it.
module.exports = getLetterAtIndex;
