const { userCollection } = require("../database");

const userController = {
  getAllUsers: async (req, res) => {
    const users = await userCollection.find({}).toArray();
    res.send(users);
  },
};

module.exports = userController;
