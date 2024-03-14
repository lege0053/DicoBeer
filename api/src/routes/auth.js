import express from "express";
import { Register , Login, Logout } from "../controllers/authController.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();

// Register route -- POST request
router.post(
    "/register",
    check("email")
        .isEmail()
        .withMessage("Entrer une adresse mail valide")
        .normalizeEmail(),
    check("pseudo")
        .not()
        .isEmpty()
        .withMessage("Votre pseudo est requis")
        .trim()
        .escape(),
    check("birthdate")
        .isDate()
        .withMessage("Entrer une date valide"),
    check("password")
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage("Le mot de passe doit avoir 8 caractères minimum."),
    Validate,
    Register
);

// Login route == POST request
router.post(
    "/login",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("password").not().isEmpty(),
    Validate,
    Login
);

router.get('/logout', Logout);

export default router;