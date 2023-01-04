// Exercise 7
// ---------------
// Write an arrow function accepts an array of objects as well as an object and returns
// a new array of objects with the object added to each element of the array.
//
// e.g. insert([{ name: "Bob" }, { name: "Josie" }], {"isAvailable": false});
// returns:
// [
//   { name: "Bob", isAvailable: false },
//   { name: "Josie", isAvailable: false },
// ];
//
// - If the second parameter is not an object, return the original array.

const insert = (arr, obj) => {
  // Insert missing solution please
};

// We need to export the function in order for our unit test to have access to it.
module.exports = insert;
