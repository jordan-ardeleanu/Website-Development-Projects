// Exercise 3
// ---------------
// Write an arrow function that expects 2 numbers as input (e.g. 1, 2)
// and returns the sum of the two numbers.
//
// - If anything other than 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
// `typeof 3` returns 'number'

const sum = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 + num2;
}

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
