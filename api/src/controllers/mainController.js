const { userCollection } = require("../database");

const mainController = {
  apiHomePage: async (req, res) => {
    const users = await userCollection.find({}).toArray();
    res.send(users);
  },
};

module.exports = mainController;
