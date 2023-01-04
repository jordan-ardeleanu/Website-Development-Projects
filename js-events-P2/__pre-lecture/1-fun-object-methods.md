---
marp: true
---

# Fundamentals: Object Methods

Read up on `Object.keys()` and `Object.values()`

- https://www.geeksforgeeks.org/object-keys-javascript/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

---

## Situation

You have an object that you need to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Output a list of my friends' names: ['Rahul', 'Marianne', etc]
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Get the AVERAGE age amongst my friends
```
