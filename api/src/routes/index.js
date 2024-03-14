import express from "express";
import {Verify, VerifyRole } from '../middleware/verify.js';
import Auth from './auth.js';
import Beer from './beer.js';
import User from './user.js';

const app = express();
app.disable("x-powered-by");
app.use(Auth);

app.get("/api", (req, res) => {
    try {
        return res.status(200).json({
            status: "success",
            data: [],
            message: "Welcome to our API homepage!",
        });
    } catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
});

// app.get("/api/user", Verify, (req, res) => {
//     return res.status(200).json({
//         status: "success",
//         message: "Welcome to the your Dashboard!",
//     });
// })

app.get("/api/admin", Verify, VerifyRole, (req, res) => {
    return res.status(200).json({
        status: "success",
        message: "Welcome to the Admin portal!",
    });
});

app.use('/api/auth', Auth);
app.use('/api/user', User)
app.use('/api/beer', Beer);


export default app;