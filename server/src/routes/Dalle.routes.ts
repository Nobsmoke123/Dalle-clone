import { Router } from "express";

import DalleController from "../controllers/DalleController";
import AsyncWrapper from "../middleware/AsyncWrapper";

const router = Router();

const dalleController = new DalleController();

router.post("/", AsyncWrapper(dalleController.generateImage));

export default router;
