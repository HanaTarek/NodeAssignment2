const userModel = require("../models/userModel");

async function addUser(req, res) {
    try {
      const dummyUser = req.body;
      const result = await userModel.addUser(dummyUser);
      res.json(result);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  }

  async function getUsersByName(req, res) {
    try {
      const name = req.params.name;
      const result = await userModel.getUsersByName(name);
      res.send({
        status: "success",
        result,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  }

  async function updateUser(req, res) {
    try {
      const { update, query } = req.body;
      const updatedResult = await userModel.updateUser(query, update);
      res.json({
        status: "success",
        updatedResult,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }

}

async function deleteUser(req, res) {
    try {
    const name = req.params.name;
    const result = await userModel.deleteUser(name);
    res.send(result);
    } catch (error) {
    console.log(error.message);
    res.status(500).send("Failure", error.message);
    }
    }
    
    module.exports = {
    addUser,
    getUsersByName,
    updateUser,
    deleteUser,
    };