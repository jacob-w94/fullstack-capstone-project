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
    console.log("Connecting to MongoDB with URL:", url);

    const client = new MongoClient(url);

    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;