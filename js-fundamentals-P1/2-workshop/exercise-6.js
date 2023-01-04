function exercise6() {
  // Exercise 6
  //
  // Life in the army is regimented!
  // Write a loop that will output every hour of the day (0 to 23) and
  // determine whether it is time to sleep, eat or train.
  //
  // These are the hours alloted to each activity.
  // - Sleep between 22h and 5h
  // - Eat at 6h, 12h and 18h
  // - The rest of the time is spent training.
  //
  // Expected Output
  // ...
  // It's 10h. Time to train!
  // It's 11h. Time to train!
  // It's 12h. Time to eat!
  // It's 13h. Time to train!
  // ...
  //
  // Use interpolation to build your output string
  // e.g. `It's ${number}h. Time to train!`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  for (let time = 0; time <= 23; time++) {
    if (time >= 22 || time <= 5) {
      console.log(`It's ${time}h. Time to sleep!`);
    }
    else if(time == 6 || time == 12 || time == 18){
    console.log(`It's ${time}h. Time to eat!`);
    }
    else{
    console.log(`It's ${time}h. Time to train!`);
    }
    // Mayhem
    // if (time == 23){
    // time = 0
    //}
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
// yarn test exercise6

module.exports = exercise6;
