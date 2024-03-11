const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

dotenv.config();

const router = require("./src/router");

// Create app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`🚀 Serveur listening at http://localhost:${port}`);
});
