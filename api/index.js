const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

// Import local dependencies
const router = require("./src/router");
//const notFoundMiddleware = require("./src/middlewares/notFoundMiddleware");

// Create app
const app = express();

app.use(cors());

/* 
app.set("view engine", "ejs");
app.set("views", "./src/views"); 
*/

//app.use(express.static("./public"));
//app.use(express.urlencoded({ extended: true }));

app.use(router);

//router.use(notFoundMiddleware);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`🚀 Serveur listening at http://localhost:${port}`);
});
