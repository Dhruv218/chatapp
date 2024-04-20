import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, getallusers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/all", protectRoute, getallusers);

export default router;
