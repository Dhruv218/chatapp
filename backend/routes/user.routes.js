import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, getallusers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsersForSidebar);
router.get("/all", getallusers);

export default router;
