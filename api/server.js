import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { MONGODB_URL, PORT } from "./src/config/index.js";
import App from "./src/routes/index.js";

// create server
const server = express();

// config
server.use(cors());
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// connection
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
    .connect(MONGODB_URL)
    .then(console.log("Connected to database"))
    .catch((err) => console.log(err));

// routes
server.use(App);

// start server
server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);