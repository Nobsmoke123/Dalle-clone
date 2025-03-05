import mongoose from "mongoose";

export interface Post {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

const postSchema = new mongoose.Schema<Post>(
  {
    name: {
      type: String,
      required: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
