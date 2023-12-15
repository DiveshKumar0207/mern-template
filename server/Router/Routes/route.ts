import express from "express";
const router = express.Router();

import userController from "../controllers/user";

router.get("/", userController.index);
router.post("/example", userController.example);

export default router;
