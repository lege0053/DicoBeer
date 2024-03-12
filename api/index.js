const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const rateLimit = require('express-rate-limit');

// Limiter la politique d'accès
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100000, // limite chaque IP à 100K requêtes par window (« fenêtre » — ici, 15 minutes)
  standardHeaders: true, // retourne les infos dans le header RateLimit-*
  legacyHeaders: false, // désactive les X-RateLimit-* headers
});

dotenv.config();

const router = require("./src/router");

// Create app
const app = express();

app.use(limiter);
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`🚀 Serveur listening at http://localhost:${port}`);
});
