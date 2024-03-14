import express from "express";
import { getAllUsers, getUserById, getUserByEmail, deleteUser, updateUser, changePassword } from "../controllers/userController.js";

const router = express.Router();

router.get("/getAllUsers",getAllUsers);

router.post("/getUserById",getUserById);
router.post("/getUserByEmail",getUserByEmail);
router.post("/deleteUser",deleteUser)
router.post("/updateUser",updateUser)
router.post("/changePassword",changePassword)

export default router;