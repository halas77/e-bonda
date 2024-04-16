import { Router } from "express";
import {
  userPostController,
  userGetController,
} from "../controllers/userController.js";

const router = Router();

router.post("/createuser", userPostController);
router.get("/", userGetController);

export default router;
