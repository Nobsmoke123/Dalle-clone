import { Request, Response } from "express";
import DalleService from "../services/DalleService";

class PostControllers {
  private readonly dalleService: DalleService;

  constructor() {
    this.dalleService = new DalleService();
  }

  createPost = (req: Request, res: Response) => {
    
  }
}

export default PostControllers;
