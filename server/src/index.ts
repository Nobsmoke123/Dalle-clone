import http from "node:http";
import app from "./app";
import ConnectDatabase from "./database/connect";
import { Logger } from "./utils/Logger";

import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT;

const startServer = async () => {
  server.listen(PORT, async () => {
    await ConnectDatabase();
    Logger.info(`Server listening on port http://localhost:${PORT}`);
  });
};

startServer();
