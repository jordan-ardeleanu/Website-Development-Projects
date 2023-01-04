// Exercise 2
//
// Write a function that accepts two integers and returns
// the greater integer.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {
  if(num1 > num2){
    return num1;
  }
  else if(num1 < num2){
    return num2;
  }
  else{
    return undefined;
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//

// Call the function to test your code.
console.log(getMax(12, 43));

// This is needed for automated testing (more on that later)
module.exports = getMax;
