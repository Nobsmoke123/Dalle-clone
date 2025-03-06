import { Router, Request, Response } from "express";
import PostControllers from "../controllers/PostControllers";

const router = Router();
const postController = new PostControllers();

router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Post Routes.");
});

router.post("/", postController.createPost);

export default router;
