const { beerCollection } = require("../database");

const beerController = {
  getAllBeer: async (req, res) => {
    const users = await beerCollection.find({}).toArray();
    res.send(users);
  },
};

module.exports = beerController;
