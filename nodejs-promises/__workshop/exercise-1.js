// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let allStrings = array.every((word) => typeof word === "string");
    if (allStrings) {
      let allCaps = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(allCaps);
    } else {
      reject("It did not work");
    }
  });
};
const sortWords = (array) => {
  allSortedPromise = new Promise((resolve, reject) => {
    let allStrings = array.every((word) => typeof word === "string");
    if (allStrings) {
      resolve(array.sort());
    } else {
      reject("It did not work");
    }
  });
  return allSortedPromise;
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
