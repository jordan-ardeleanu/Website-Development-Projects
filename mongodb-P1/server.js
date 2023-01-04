"use strict";

const express = require("express");
const morgan = require("morgan");
const { getUsers } = require("./exercises/exercise-1.3");
const { addUser } = require("./exercises/exercise-1.4");
const { createGreeting, getGreeting, getGreetings, deleteGreeting, updateGreeting } = require("./exercises/exercise-2");

const PORT = process.env.PORT || 8000;

express()
    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))

    .get("/exercise-1/users", async (req, res) => {
        const data = await getUsers("exercise_1");

        if (data.length === 0) {
        res.status(404).json({ status: 404, data: "No data found." });
        }
        else if (data.length > 0) {
        res.status(200).json({ status: 200, data: data });
        }
    })

    .post("/exercise-1/users", async (req, res) => {
    const newUser = req.body;
    try {
        await addUser("exercise_1", newUser);
        res.status(201).json({ status: 201, data: newUser});
    } catch (err) {
        res.status(400).json({ status: 400, data: newUser});
    }
    })
    
    .post("/exercise-2/greeting", createGreeting)

    .get("/exercise-2/greeting/:quary", getGreeting)

    .get("/exercise-2/greetings", getGreetings)

    .delete("/exercise-2/greeting/:_id", deleteGreeting)

    .put("/exercise-2/greeting/:_id", updateGreeting)

    // handle 404s
    .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
