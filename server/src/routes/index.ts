import { Router } from "express";
import PostRoutes from "./Post.routes";
import DalleRoutes from "./Dalle.routes";

const router = Router();

router.use("/api/v1/posts", PostRoutes);
router.use("/api/v1/dalle", DalleRoutes);

export default router;
