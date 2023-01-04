function exercise5_4() {
  // Exercise 5.4
  //
  // Write a loop that will print to the console
  // all of the EVEN integers from 36 to 0.
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  for (let number = 36; number > -1; number--) {
    if (number % 2) {
      //console.log(number);
    }
    else {
    console.log(number);
    }
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
// yarn test exercise-5.4

module.exports = exercise5_4;
