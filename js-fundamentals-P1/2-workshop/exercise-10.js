function exercise10() {
  // Exercise 10
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  let chessBoard1 = "#_#_#_#_";
  let chessBoard2= "_#_#_#_#";

  for (let loop = 0; loop < 8; loop++) {
    if(loop % 2){
      console.log(chessBoard2);
    }
    else{
      console.log(chessBoard1);
    }
  }

  // ------------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
