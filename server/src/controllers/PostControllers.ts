import { Request, Response } from "express";
import PostService from "../services/PostService";

class PostControllers {
  private readonly postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  createPost = async (req: Request, res: Response) => {
    const { prompt, name, photo } = req.body;

    const photoUrl = await this.postService.uploadImage(photo);

    const post = await this.postService.savePost(name, prompt, photoUrl);

    return res.status(200).json({
      post,
    });
  };

  listPosts = async (_req: Request, res: Response) => {
    const posts = this.postService.listPosts();

    return res.status(200).json({ posts });
  };
}

export default PostControllers;
