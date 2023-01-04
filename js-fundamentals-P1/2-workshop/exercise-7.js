function exercise7() {
  // Exercise 7
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  let sum = 0;

  for (let number = 1; sum < 5000; number++) {
    sum = number * 4;
    console.log(`The sum is ${sum}`);
  }


  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-7

module.exports = exercise7;
