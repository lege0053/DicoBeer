const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = Router();

router.get("/api/home", mainController.apiHomePage);

module.exports = router;