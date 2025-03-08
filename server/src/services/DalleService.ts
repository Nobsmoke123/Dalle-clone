import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

class DalleService {
  private readonly client: OpenAI;
  private readonly OPENAI_API_KEY = process.env.OPEN_AI_API_KEY_JOYNAMIC;

  constructor() {
    if (this.OPENAI_API_KEY !== undefined) {
      this.client = new OpenAI({
        apiKey: this.OPENAI_API_KEY,
      });
    } else {
      throw new Error(`'OPEN_AI_API_KEY' is undefined.`);
    }
  }

  generateImage = async (prompt: string) => {
    const response = await this.client.images.generate({
      model: "dall-e-3",
      prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
      response_format: "b64_json",
    });

    const image = response.data[0].b64_json;

    return image;
  };
}

export default DalleService;
