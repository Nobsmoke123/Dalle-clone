import { Request, Response } from "express";
import PostService from "../services/PostService";

class PostControllers {
  private readonly postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  createPost = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    return res.status(200).json({});
  };
}

export default PostControllers;
