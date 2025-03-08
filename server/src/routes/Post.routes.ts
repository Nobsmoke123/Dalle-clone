import { Router } from "express";
import PostControllers from "../controllers/PostControllers";
import AsyncWrapper from "../middleware/AsyncWrapper";

const router = Router();

const postController = new PostControllers();

router.get("/", AsyncWrapper(postController.listPosts));

router.post("/", AsyncWrapper(postController.createPost));

export default router;
