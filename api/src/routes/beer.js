import express from "express";
import { getAllBeers } from "../controllers/beerController.js";

const router = express.Router();

// getAllBeer route -- GET request
router.get("/getAllBeers",getAllBeers);

export default router;