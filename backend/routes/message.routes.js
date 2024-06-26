import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/:id", getMessages);
router.post("/send/:id" , sendMessage);

export default router;
