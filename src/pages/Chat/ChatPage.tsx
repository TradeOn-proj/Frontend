import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import Chat from "./Chat";
import { container } from "./Chat.style";

const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const userId = "9"; // 로그인한 유저 정보
console.log("🔥 선택된 채팅방 ID:", selectedRoomId); // 👈 여기 찍으세요
  return (
    <div css={container}>
      <ChatSidebar onSelectRoom={setSelectedRoomId} />

      {selectedRoomId ? (
        <Chat roomId={selectedRoomId} userId={userId} />

      ) : (
        <div style={{ padding: "2rem" }}>채팅방을 선택해주세요</div>
      )}
    </div>
  );
};

export default ChatPage;
