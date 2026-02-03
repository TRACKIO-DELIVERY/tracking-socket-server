import { createServer } from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socket/handler";

const httpServer = createServer();

const io = new Server(httpServer, {
  path: "/track/socket.io",
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Novo socket:", socket.id);
  registerSocketHandlers(io, socket);
});

httpServer.listen(3333, () => {
  console.log("Socket server rodando na porta 3333");
});
