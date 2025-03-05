import http from "node:http";
import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
