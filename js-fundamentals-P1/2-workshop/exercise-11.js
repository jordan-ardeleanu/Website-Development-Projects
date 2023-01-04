function exercise11() {
  // Exercise 11
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  // Only ever worked when using a function. :/

  let primeOutput;

  for (let loop = 1; loop < 200; loop++) {
  
    primeOutput = isPrime(loop);
    if(primeOutput !== false && primeOutput !== 1){
      console.log(isPrime(primeOutput));
    }
  }
  
  function isPrime(primeInput) {
    for(let primeTest = 2; primeTest < primeInput; primeTest++)
      if(primeInput % primeTest === 0)
      {
        return false;
      }
    return primeInput;
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
// yarn test exercise-11

module.exports = exercise11;
exercise11()