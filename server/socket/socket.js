import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

const userSocketMap = new Map(); // userId -> socket.id
const socketUserMap = new Map(); // socket.id -> userId

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (!userId) return;

  userSocketMap.set(userId, socket.id);
  socketUserMap.set(socket.id, userId);
  console.log(`User ${userId} registered with socket ID: ${socket.id}`);
  io.emit("onlineUsers", Array.from(userSocketMap.keys()));

  socket.on("sendMessage", ({ receiverId, message }) => {
    const receiverSocketId = userSocketMap.get(receiverId);
    if (receiverId) {
      console.log(
        `Message sent to user ${receiverId} with socket ID ${receiverSocketId}`
      );
    } else {
      console.log(`User ${receiverId} is not connected`);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    const userId = socketUserMap.get(socket.id);
    if (userId) {
      userSocketMap.delete(userId);
      socketUserMap.delete(socket.id);
      console.log("user deleted:", userId);
      io.emit("onlineUsers", Array.from(userSocketMap.keys()));
    }
  });
});
export const getSocketId = (receiverId) => {
  return userSocketMap.get(receiverId);
};
export { app, io, server };
