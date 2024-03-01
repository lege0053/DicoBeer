const { Router } = require("express");
const mainController = require("./controllers/mainController");
const userController = require("./controllers/userController");
const beerController = require("./controllers/beerController");

const router = Router();

router.get("/api", mainController.apiDefaultPage);
router.get("/api/users", userController.getAllUsers);
router.get("/api/beers", beerController.getAllBeer);

module.exports = router;