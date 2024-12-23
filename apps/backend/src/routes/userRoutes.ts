import express, { Router } from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router: Router = express.Router();

router.use(authMiddleware);
router.get("/user/:id", fetchUserData);
router.put("/user/:id", updateUserData);

export default router;
