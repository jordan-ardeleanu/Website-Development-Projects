// Exercise 9

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that only greets people whose names have length at least 4.
// Otherwise ignore them completely.
// For example: greetLong(["bob", "daniel"]) returns ["Hello daniel"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greetLong(list) {
  let newList = list.filter( function (listLong) {
    return listLong.length >= 4;
  });
  let finalGreet = newList.map(function (greeting) {
    return "Hello " + greeting;
  });
  return finalGreet;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// This is needed for automated testing (more on that later)
module.exports = greetLong;
