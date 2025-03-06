import { Router } from "express";
import PostControllers from "../controllers/PostControllers";

const router = Router();
const postController = new PostControllers();

router.get("/", postController.listPosts);

router.post("/", postController.createPost);

export default router;
