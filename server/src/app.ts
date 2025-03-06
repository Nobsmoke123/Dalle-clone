import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { PostRoutes, DalleRoutes } from "./routes";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());
app.use("/api/v1/posts", PostRoutes);
app.use("/api/v1/dalle", DalleRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
