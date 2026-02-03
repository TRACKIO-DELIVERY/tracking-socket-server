import { Server, Socket } from "socket.io";
import { SOCKET_EVENTS } from "./events";
import { LocationPayload } from "../types/sockets";

export function registerSocketHandlers(io: Server, socket: Socket) {
  socket.on(SOCKET_EVENTS.JOIN_ORDER, (orderId: number) => {
    socket.join(`order:${orderId}`);
    console.log(`Socket ${socket.id} entrou na order ${orderId}`);
  });

  socket.on(SOCKET_EVENTS.SEND_LOCATION, (data: LocationPayload) => {
    const { lat, lng, orders } = data;

    orders.forEach((order) => {
      io.to(`order:${order.id}`).emit(SOCKET_EVENTS.RECEIVE_LOCATION, {
        lat: data.lat,
        lng: data.lng,
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("Socket desconectado:", socket.id);
  });
}
