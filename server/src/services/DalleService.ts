import OpenAI from "openai";

class DalleService {
  private readonly client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });
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
