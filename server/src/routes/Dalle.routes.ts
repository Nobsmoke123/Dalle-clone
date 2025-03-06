import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Dalle Routes.");
});

export default router;
