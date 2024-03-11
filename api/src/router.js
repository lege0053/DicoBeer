const { Router } = require("express");
const mainController = require("./controllers/mainController");
const userController = require("./controllers/userController");
const beerController = require("./controllers/beerController");

const router = Router();

router.get("/api", mainController.apiDefaultPage);
router.get("/api/users", userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.get("/api/beers", beerController.getAllBeer);

router.post("/api/auth/login", userController.login);
router.post("/api/auth/logout", userController.logout);
router.post("/api/users/createUser", userController.createUser);
router.post("/api/users/deleteUser", userController.deleteUser);

module.exports = router;