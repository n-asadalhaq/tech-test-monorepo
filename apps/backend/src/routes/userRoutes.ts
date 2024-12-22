import express from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);
router.get("/user/:id", fetchUserData);
router.put("/user/:id", updateUserData);

export default router;
