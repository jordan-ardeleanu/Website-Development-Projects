function exercise5_3() {
  // Exercise 5.3
  //
  // Write a loop that will print to the console
  // all of the EVEN integers from 1 to 50.
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  for (let number = 1; number < 51; number++) {
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
// yarn test exercise-5.3

module.exports = exercise5_3;
