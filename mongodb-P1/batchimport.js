const fs = require("fs");
const greetings = require("./data/greetings.json");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const batchImport = async () => {
    const client = await MongoClient(MONGO_URI, options);
    try {
        
        await client.connect();
        const db = client.db("exercises");
        await db.collection("greetings").insertMany(greetings);
        console.log({ status: 201, data: greetings });
    } catch (err) {
        console.log(err.stack);
    }
    client.close();
}

batchImport();