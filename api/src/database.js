const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL);

const database = client.db(process.env.DATABASE_NAME);

const userCollection = database.collection("user");
const beerCollection = database.collection("beer");

module.exports = {userCollection, beerCollection};
