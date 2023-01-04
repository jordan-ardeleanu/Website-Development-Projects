---

marp: true

---

# Fundamentals: Rest/Spread

---

In 2015, JS introduced the `...` operator

It can be used in a number of different ways

---

Let's say we want to write a function that takes an _unlimited_ number of arguments:

```js
const addAllArguments = () => {
  // return the sum of ALL arguments
}

addAllArguments(3, 5); // Should return 8
addAllArguments(3, 5, 2); // Should return 10
addAllArguments(3, 5, 2, 11, -5); // Should return 16
```

---

## Rest

```js
const addAllArguments = (...nums) => {
  console.log(nums); // Is an array of all arguments
  // return the sum of ALL arguments
}

addAllArguments(3, 5); // Should return 8
addAllArguments(3, 5, 2); // Should return 10
addAllArguments(3, 5, 2, 11, -5); // Should return 16
```

---

## Spread

Spread is kind of like the opposite of `Rest`

- Rest collects many arguments into an array
- Spread "spreads out" an array into many arguments

---

```js
const arr = [1, 2, 3, 4, 5];

addAllArguments(...arr);

```

---

You can use it to copy an array:

```js
let arr1 = [1, 2, 3];

let copyArr = [...arr1];
```

---

You can use it to combine arrays:

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
```

---

It also works with objects:

```js
let obj = {name: "Bob", age: 55};

let copiedObj = {...obj};
```

```js
let obj1 = {name: "Gary Goodspeed", age: 32};
let obj2 = {firstName: "Quinn", lastName: "Ergon", rank: "Captain"};

let combined = {...obj1, ...obj2};
```

---

# ⚠️ Warning ⚠️
When comining objects, the same key cannot exist twice. 

Only the last instance of the key will be preserved:

```js
let obj1 = {name: "Gary Goodspeed", age: 32}
let obj2 = {name: "Little Cato", age: 14}

let combined = {...obj1, ...obj2}; // what's in here?
```