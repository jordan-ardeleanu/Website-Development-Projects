// Exercise 4
// ---------------
// Write an arrow function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.
// - If the array is empty, the function should return undefined.

const sum = (arr) => {
  let sum = 0;
  if(!arr.length){
    return undefined;
  }

  for( let loop = 0; arr.length > loop; loop++){
    if (typeof arr[loop] !== "number") {
      return undefined;
    }
    else
    {
      sum += arr[loop];
    }
  }
  return sum;
}

console.log(sum([]));
// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
