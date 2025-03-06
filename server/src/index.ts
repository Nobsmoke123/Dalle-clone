import http from "node:http";
import * as dotenv from "dotenv";
import app from "./app";
import ConnectDatabase from "./database/connect";
import { Logger } from "./utils/Logger";

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(app);

const startServer = async () => {
  server.listen(PORT, async () => {
    await ConnectDatabase();
    Logger.info(`Server listening on port ${PORT}`);
  });
};

startServer();
