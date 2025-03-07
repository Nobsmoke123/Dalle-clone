import { v2 as cloudinary } from "cloudinary";
import PostModel from "../database/models/Posts";
import dotenv from "dotenv";
dotenv.config();

class PostService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  uploadImage = async (photo: string) => {
    const photoUrl = await cloudinary.uploader.upload(photo);
    return photoUrl.url;
  };

  savePost = async (name: string, prompt: string, photo: string) => {
    const newPost = new PostModel({
      name,
      prompt,
      photo,
    });

    const result = await newPost.save();

    return result;
  };

  listPosts = async () => {
    const posts = await PostModel.find({});
    return posts;
  };
}

export default PostService;
