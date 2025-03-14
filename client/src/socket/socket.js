import { io } from "socket.io-client";

let socket = null;

export const initializeSocket = (userId) => {
  if (socket) {
    socket.disconnect(); // Close any existing connection before creating a new one
    socket = null;
  }
  socket = io(import.meta.env.VITE_ORIGIN_URL, {
    query: {
      userId,
    },
  });
  return socket;
};

export const sendMessageViaSocket = (receiverId, message) => {
  socket.emit("sendMessage", { receiverId, message });
};

export const getSocket = () => {
  return socket;
};
