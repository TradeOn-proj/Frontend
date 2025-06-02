import { io } from "socket.io-client";

const socket = io( "https://673e-121-140-48-141.ngrok-free.app", {
  transports: ["websocket"],
  withCredentials: true,
});

export default socket;
