const { MongoClient } = require("mongodb"); 
//const dotenv = require("dotenv"); ???????
const client = new MongoClient(process.env.DATABASE_URL);

async function addUser(user) {

    try {
      await client.connect();
      const db = client.db(process.env.DATABASE_NAME);
      const usersCollection = db.collection("users");
  
      const insertOptions = {
        ordered: false,
        bypassDocumentValidation: true,
      };
  
      await usersCollection.insertOne(user, insertOptions);
  
      return `User ${user.name} added`;
    }
     catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  }

  async function getUsersByName(name) {
    try {
      await client.connect();
      const db = client.db(process.env.DATABASE_NAME);
      const usersCollection = db.collection("users");
  
      const query = { name };
  
      const queryOptions = {
        limit: 4,
        skip: 0,
        projection: { _id: 0 },
      };
  
      const result = await usersCollection
        .find(query, queryOptions)
        .sort({ age: 1 })
        .toArray(); //when i don't use to array 
  
        res.send({
            status: "success",
            result,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(err.message);
    }
  }

  async function updateUser(query, update) {
    try {
      await client.connect();
      const db = client.db(process.env.DATABASE_NAME);
      const usersCollection = db.collection("users");
  
      const newValues = { $set: update };//??
  
      const updateOptions = {
        multi: true,
        upsert: true,
      };
  
      const updatedResult = await usersCollection.updateOne(
        query,
        newValues,
        updateOptions
      );
  
      res.json({
        status: "success",
        updatedResult,
    });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(err.message);
    }
  }

  async function deleteUser(name) {
    try {
      await client.connect();
      const query = { name };
      const db = client.db(process.env.DATABASE_NAME);
      const usersCollection = db.collection("users");
  
      await usersCollection.deleteOne(query);
  
      return res.send("success");
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("failure", err.message);
    }
  }


  module.exports = {
    addUser,
    getUsersByName,
    updateUser,
    deleteUser,
  };
