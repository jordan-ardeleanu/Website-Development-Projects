---
marp: true
---

# Fundamentals: Deconstruction

---

Let's say we have the following program:

```js
const introducePerson = (data) => {
  const name = data[0];
  const city = data[1];
  const age = data[2];

  console.log(`His name is ${name} (${age} yrs old). He lives in ${city}.`);
};

const me = ["Josh", "Montreal", 33];
introducePerson(me);
```

We're essentially "deconstructing" the array.

---

There is a syntax to do this in 1 step:

```js
const introducePerson = (data) => {
  const [name, city, age] = data;

  console.log(`His name is ${name} (${age} yrs old). He lives in ${city}.`);
}

const me = ["Josh", "Montreal", 33];
introducePerson(me);
```

---

By wrapping the assignment variables in square brackets, you "unpack" them:

```js
let [one, two, three] = [1, 2, 3];
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```

---

Finally: something similar works with objects.

---

```js
// Example
let myObj = {
  name: "Josh",
  city: "Montreal",
  age: 33,
};

console.log(
  `His name is ${myObj.name} (${myObj.age} yrs old). He lives in ${myObj.city}.`
);
```

---

# Exercises

Convert the following to take advantage of deconstruction

---

```js
// Exercise 1
let winningNumbers = [4, 17, 38, 9];

let firstPlace = winningNumbers[0];
let secondPlace = winningNumbers[0];
let thirdPlace = winningNumbers[0];

console.log(`Winners are: ${firstPlace}, ${secondPlace}, ${thirdPlace}.`);
```

---

```js
// Exercise 2
let weatherData = {
  city: "Toronto",
  weather: "sunny",
  temperature: 23,
};

const printWeather = (data) => {
  console.log(
    `It is ${data.weather} in ${data.city}, with a high of ${temperature}.`
  );
}

printWeather(weatherData);
```

---

```js
// Exercise 3
const handleChange = (event) => {
  let value = event.target.value;
  console.log(value);
}

let input = document.querySelector("input");
input.addEventListener("change", handleChange);
```
