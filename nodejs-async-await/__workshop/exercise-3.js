// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      const result = num * 2;
      setTimeout(() => resolve(result), 2000); 
    }
    else {
      reject('ERROR: NOT A NUMBER');
    }
  })  
};

// 3. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    const double = await doublesLater(num);
    const doubleOfDouble = await doublesLater(double);
    const doubleOfDoubleOfDouble = await doublesLater(doubleOfDouble);
    return doubleOfDoubleOfDouble;
  } catch (error) {
    console.log(error);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
