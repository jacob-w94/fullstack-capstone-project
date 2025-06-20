// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance
    };

    const client = new MongoClient(url);

    try {
        await client.connect();

        dbInstance = client.db(dbName);

        console.log("connected to mongodb and database giftdb")
    } catch (e) {
        console.error("Failed to connect to MongoDB", e);
    }

    return dbInstance
}

module.exports = connectToDatabase;
