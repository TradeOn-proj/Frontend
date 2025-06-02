import { useEffect } from "react";
import socket from "libs/socket";

const useSocket = (
  roomId: string,
  userId: string,
  onMessage: (msg: any) => void
) => {
  console.log("🔧 useSocket 진입:", roomId, userId);

  useEffect(() => {
    console.log("🎯 useSocket useEffect 실행됨");

    // ✅ 소켓 연결됐을 때만 join 전송
    socket.on("connect", () => {
      console.log("🟢 Socket Connected");
      socket.emit("join", { username: userId, roomid: roomId }); // ✔️ 여기로 이동
    });

    // ✅ 메시지 수신 처리
    socket.on("message", (msg) => {
      console.log("📩 받은 메시지:", msg);
      onMessage(msg);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Socket Disconnected");
    });

    return () => {
      // ✅ 정확히 등록한 이벤트만 해제
      socket.off("connect");
      socket.off("message");
      socket.off("disconnect");
    };
  }, [roomId, userId, onMessage]);
};

export default useSocket;
