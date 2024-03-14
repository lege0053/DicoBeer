const { Router } = require("express");
const router = Router();

const mainController = require("./controllers/mainController");
const userController = require("./controllers/userController");
const beerController = require("./controllers/beerController");
const authController = require("./controllers/authController");

// const auth = require('../middleware/auth');

// GET
router.get("/api", mainController.apiDefaultPage);
router.get("/api/users", userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.get("/api/beers", beerController.getAllBeer);

// POST
router.post("/api/auth/login", authController.login);
router.post("/api/auth/logout", authController.logout);
router.post("/api/users/createUser", userController.createUser);
router.post("/api/users/deleteUser", userController.deleteUser);

module.exports = router;