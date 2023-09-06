import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected to MongoDB Atlas...");
} catch(e) {
  console.error(e);
}
let db = conn.db("Ankit");
// db.createCollection("records", function(err, res) {
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Collection is created!");
//     }}
// )

export default db;