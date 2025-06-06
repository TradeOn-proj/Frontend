import {container, chatArea,chatHeader, blackBtn,
    messageList,dateDivider,scheduleBox,reservationTag,time, inputArea, sendBtn, inputBox,
    msgMe, msgOther, chatPerson
} from "./Chat.style"
import { useState, useEffect } from "react";
import ChatSidebar from "./ChatSidebar";
import useSocket from "apis/hooks/chat/useSocket";
import socket from "libs/socket";
import { useParams } from "react-router-dom";
import TradePromiseModal from "./TradePromiseModal";
import TradeCompleteModal from "./TradeCompleteModal";


interface ChatMessage {
  user: string;
  msg: string;
}

// roomId, userId는 상위 route에서 받아오는 것으로 가정
const Chat = ({ roomId, userId }: { roomId: string; userId: string }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [reservationDate, setReservationDate] = useState<string | null>(null);
  const [isPromiseModalOpen, setIsPromiseModalOpen] = useState(false);
const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  console.log("✅ roomId:", roomId, "userId:", userId);
 // ✅ join 이벤트 보내기 (처음 마운트 시)
  useEffect(() => {
    socket.emit("join", { username: userId, roomid: roomId });
  }, [roomId, userId]);

  // ✅ 수신 메시지 처리
  console.log("🔧 Chat.tsx → useSocket 호출:", roomId, userId);
  useSocket(roomId,userId, (msg) => {
     console.log("📩 최종 받은 메시지:", msg);
    setMessages((prev) => [...prev, msg]);
  });

  // 메시지 보내기
  const sendMessage = () => {
    if (!input.trim()) return;
    const token = localStorage.getItem("accessToken");
    const payload = {
       token, 
      username: userId,
      roomid: roomId,
      msg: input,
    };

    console.log("📤 보내는 메시지:", payload);
    socket.emit("message", payload);
    setInput("");
  };

const openPromiseModal = () => setIsPromiseModalOpen(true);
const closePromiseModal = () => setIsPromiseModalOpen(false);
 const handleReservationSuccess = (date: string) => {
    setReservationDate(date); // 🔥 성공한 날짜 저장
  };
  const openCompleteModal = () => setIsCompleteModalOpen(true);
const closeCompleteModal = () => setIsCompleteModalOpen(false);

 return (
    <div css={container}>

      <div css={chatArea}>
        <div css={chatHeader}>
          <div css={chatPerson}>● 거래거래왕
          {reservationDate && (
      <span css={reservationTag}>
        {new Date(reservationDate).toLocaleString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })} 예약</span>
    )}
    </div>
          <div>
            <button css={blackBtn} onClick={openPromiseModal}>약속잡기 🗓</button>
            {isPromiseModalOpen && (
      <TradePromiseModal
                chatroomId={parseInt(roomId)}
                onClose={closePromiseModal}
                onSuccess={handleReservationSuccess} // 🔥 콜백 전달
              />
            )}
            <button css={blackBtn} onClick={openCompleteModal}>거래완료 ✔</button>
            {isCompleteModalOpen && (
            <TradeCompleteModal
            tradeId={113}
            onClose={closeCompleteModal}
  />
)}
          </div>
        </div>

          <div css={messageList}>
          <div css={dateDivider}>
            {new Date().toLocaleDateString("ko-KR", {
              year: "numeric", month: "long", day: "numeric", weekday: "long",
            })}
          </div>
 {/* ✅ 메시지 출력 */}
          {messages.map((msg, i) => (
            <div key={i} css={msg.user === userId ? msgMe : msgOther}>
              <div>{msg.msg}</div>
              <span css={time}> {new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</span>
            </div>
          ))}
        </div>
{/* ✅ 입력창 */}
        <div css={inputArea}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="메시지를 입력하세요"
            css={inputBox}
          />
          <button css={sendBtn} onClick={sendMessage}>📩</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;