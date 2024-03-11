const { beerCollection } = require("../database");

const beerController = {
  getAllBeer: async (req, res) => {
    const users = await beerCollection.find({}).toArray();
    res.json(users);
  },
};

module.exports = beerController;
