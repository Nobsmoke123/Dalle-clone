import { Request, Response } from "express";
import DalleService from "../services/DalleService";

class DalleController {
  private readonly dalleService: DalleService;

  constructor() {
    this.dalleService = new DalleService();
  }

  generateImage = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    const response = await this.dalleService.generateImage(prompt);

    return res.status(200).json({ photo: response });
  };
}

export default DalleController;
