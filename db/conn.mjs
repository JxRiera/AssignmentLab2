import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://jrieradu:jrieradu@sbsetupclassf23.sdsp3pq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

const client = new MongoClient(connectionString);

let conn;
try {
conn = await client.connect();
console.log("CONNECTED TO MONGODB")
} catch(ex) {
console.error(ex);
}

let db = conn.db("Marketplace");

export default db;
