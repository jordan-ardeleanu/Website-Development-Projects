// Exercise 1.4
//
// Write a function that accepts a name and returns only the first name and last name.
// Essentially removing the middle name if there is one.
// - This function should still work if there is no middle name.
// - If there are multiple middle names this function should still work.
// - If the string has only one name, e.g. "Adele", it should return that name
//
// Example:
// shortenName("Morty Antoine Smith") should return "Morty Smith"
// shortenName("Morty Smith") should return "Morty Smith"
// shortenName("Morty") should return "Morty"
// shortenName("Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  let dicsectAll = string.split(" ");
  let firstName = dicsectAll[0];
  let almostLastName = dicsectAll.reverse();
  let lastName = almostLastName[0]
  if(dicsectAll[1] == undefined){
    return firstName;
  }
  return firstName + " " + lastName;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
