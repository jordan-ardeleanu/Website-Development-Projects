function exercise5_5() {
  // Exercise 5.5
  //
  // Write a loop that will iterate from 0 to 10.
  // For each iteration, it should check whether a number is even or odd
  // and display that state along with the number.
  // e.g.
  // 0 is even
  // 1 is odd
  // 2 is even
  // ...
  // many other possibilities here.
  //
  // Use interpolation to build your output string
  // e.g. `${number} is odd`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  for (let number = 0; number < 11; number++) {
    if (number % 2) {
      console.log(`${number} is odd`);
    }
    else {
      console.log(`${number} is even`);
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
// yarn test exercise-5.5

module.exports = exercise5_5;
