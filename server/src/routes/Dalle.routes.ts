import { Router, Request, Response } from "express";

import DalleController from "../controllers/DalleController";

const router = Router();

const dalleController = new DalleController();

router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Dalle Routes.");
});

router.post("/", dalleController.generateImage);

export default router;
