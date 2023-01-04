function exercise9() {
  // Exercise 9
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let weirdPyramid = "";

  for (let loop = 0; loop < 7; loop++) {
    weirdPyramid += "#";
    console.log(weirdPyramid);
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
// yarn test exercise-9

module.exports = exercise9;
