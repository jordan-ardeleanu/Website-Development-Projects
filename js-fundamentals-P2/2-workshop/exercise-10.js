// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  let lengths = list.map(function(words){
    return words.length;
  })

  let newList = lengths.every( function (words){
    return words >= 5;
  })
  return newList;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
allLong(["This", "should", "return", "false"]);

// This is needed for automated testing (more on that later)
module.exports = allLong;
