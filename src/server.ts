import { createServer } from "http";

import app from "./app";
import { PORT } from "./utils";

const server = createServer(app);

server.listen(PORT, async () => {
  console.log("connected to server", PORT);
});

process.on("unhandledRejection", (err: unknown) => {
  console.log("UNHANDLED REJECTION!", err);
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
