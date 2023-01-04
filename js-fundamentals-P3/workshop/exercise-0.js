// Exercise 0
// ---------------
// Write an arrow function accepts a string as an argument and returns the number of letters in that string
//
// - If it's an empty string (''), return undefined.
// - If it's not a string, return undefined.

const strLength = (str) => {
  // Your code here
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.length;
}

// We need to export the function in order for our unit test to have access to it.
module.exports = strLength;
