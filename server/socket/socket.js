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

io.on("connection", (socket) => {
  console.log("A user connected with id :", socket.id);
  io.on("disconnect", () => {
    console.log("user disconnected");
  });
});

export { app, io, server };
