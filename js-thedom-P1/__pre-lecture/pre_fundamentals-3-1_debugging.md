# Fundamentals: Debugging

A programmer spends almost all of their time writing code. True or false?

Writing code is only one of the many things that a programmer does. We spend lots of time doing other things as well.

- Reading documentation
- Reading code
- Researching (googling)
- **Debugging code**

Debugging is arguably the most important skill to be a successful developer.

## Bugs! Where do they come from?

They can come form just about anywhere.

- Typos
- Forgot to pass an argument
- Pass the wrong type of data as an argument
- Make wrong assumptions
- A million other things

In certain cases, a bug will cause your code to crash. **This is a good thing.** An error is a message that _tells you what the problem is_. These are generally called exceptions. And we love them because they _usually_ provide a hint to the problem. Exception location is often only a **starting point**. The actual programmer mistake can very well be elsewhere.

_This is similar to how a human error in a factory will manifest itself only in the final product._

---

Always **read error messages**.

It should be your FIRST reflex.

💡💡 **Check the console** for error messages. 💡💡

---

### Example

This code snippet throws the error below. Feel free to run it to verify. What is the problem and how do we fix it?

```js
const getCartTotal = (data) => {
  let salesTax = 1.14;
  return data.cart.subtotal * salesTax;
}

getCartTotal({
  items: ['banana'],
  subtotal: 5,
});
```

```
f:\_journey\journey-fullstack-imm\lectures\2-javascript\5-more-fundamentals-1\test.js:3
  return data.cart.subtotal * salesTax;
                   ^

TypeError: Cannot read property 'subtotal' of undefined
```
