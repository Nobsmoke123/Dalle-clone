import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import errorHandler from "./middleware/ErrorHandler";
import Error404Handler from "./middleware/Error404Handler";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(router);

app.use(Error404Handler);

app.use(errorHandler);

export default app;
