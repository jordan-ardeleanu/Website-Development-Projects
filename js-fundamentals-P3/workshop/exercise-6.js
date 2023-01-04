// Exercise 6
// ---------------
// Write an arrow function accepts an array of values and returns a new array of stringified values.
//

const convertToString = (arr) => {
  let convergeArray = arr.toString();
  let splitArray = convergeArray.split(",")
  return splitArray;
};

// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
