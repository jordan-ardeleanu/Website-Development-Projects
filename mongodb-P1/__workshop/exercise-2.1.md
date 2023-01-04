# Exercise 2.1 - Create a Document (`insertOne`)

1. Inside of `📁 exercises`, create a file called `exercise-2.js`
2. Write a function `createGreeting`.

```js
const createGreeting = async (req, res) => {
  // temporary content... for testing purposes.
  console.log(req.body);
  res.status(200).json("ok");
};
```

3. You can refer to Exercise 1, if you can't remember specific requirements.
4. Create a `post` endpoint for this function ins `server.js`.

```js
.post('/exercise-2/greeting', createGreeting)
```

5. Use Insomnia to send the following `body` to that endpoint.

```json
{
  "lang": "English",
  "_id": "EN",
  "hello": "Hello"
}
```

6. Test out the endpoint connection.

Once all of that is working we need to actually send the data to the database. We are going to build a function similar to the one in Exercise-1 but were going to make it more robust.

First and foremost, we need to handle errors that might occur when contacting the database.

7. Edit `createGreeting`. This time we will wrap our code in a `try / catch` to be able to grab any errors. That part is done for you.

```js
const createGreeting = async (req, res) => {
    // TODO: create client
  try {
    // TODO: connect...
    // TODO: declare 'db'
    // We are using the 'exercises' database
    // and creating a new collection 'greetings'
  } catch (err) {
    console.log(err.stack);
  }

  // TODO: close client
};
```

8. Add the item to the database. Here we are declaring a variable `result` that will contain the response from the db server. _Notice that the collection is called `greetings`_. Add these lines within the `try`.

```js
const result = await db.collection("greetings").insertOne(req.body);
```

9. Before we run the request in insomnia we need to create the `res`ponses.

```js
// On success/no error, send
res.status(201).json({ status: 201, data: req.body });

// on failure/error, send
res.status(500).json({ status: 500, data: req.body, message: err.message });
```

10. Time to try it out in Insomnia!
11. Try to send the same data a second time. Do we get an error? What is it?
12. Add another item.

```json
{
  "lang": "French",
  "_id": "FR",
  "hello": "Bonjour"
}
```
