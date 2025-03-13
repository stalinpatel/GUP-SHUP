import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_ORIGIN_URL);

export default socket;
