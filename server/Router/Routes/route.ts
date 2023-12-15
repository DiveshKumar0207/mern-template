import express from "express";
const router = express.Router();

import userController from "../controllers/user";

router.get("/", userController.index);
router.get("/home", userController.home);

export default router;
