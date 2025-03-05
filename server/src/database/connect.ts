import mongoose from "mongoose";

const ConnectDatabase = async (): Promise<void> => {
  try {
    const URL = process.env.MONGO_URL;
    mongoose.set("strictQuery", true);
    if (URL !== undefined) {
      const db = await mongoose.connect(URL);
      const readyState = db.connection.readyState;
      if (readyState === 1) {
        console.log("Database connected successful.");
      } else {
        console.log("Database connection failed.");
      }
    } else {
      throw new Error(
        "MONGO_URL is undefined. Please add a value to MONGO_URL= in the .env file."
      );
    }
  } catch (error) {
    // Add winston logger here
    console.log(error);
  }
};

export default ConnectDatabase;
