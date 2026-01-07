import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Novo socket:", socket.id);
  //registrar handlers
});

httpServer.listen(3333, () => {
  console.log("Socket server rodando na porta 3333");
});
