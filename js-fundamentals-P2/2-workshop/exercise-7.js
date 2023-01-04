// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(list) {
  let newList = list.filter( function (listLong) {
    return listLong.length > 5;
  });
  return newList;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// This is needed for automated testing (more on that later)
module.exports = keepLong;
