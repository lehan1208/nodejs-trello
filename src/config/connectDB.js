import 'dotenv/config';
import { MongoClient } from 'mongodb';

const url = process.env.DB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;

const connection = async () => {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const insertResult = await collection.insertMany([
      { a: 1 },
      { a: 2 },
      { a: 3 },
    ]);
    console.log('Inserted documents =>', insertResult);
  } catch (error) {
    console.log('Connect error to server: ', error);
  } finally {
    client.close();
  }
};
export default connection;
