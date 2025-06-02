 import {sidebar, roomItem} from "./ChatSidebar.style";
import useGetChatRoomList from "apis/hooks/chat/useGetChatRoomList";
import Chat from "./Chat"; // 직접 렌더링할 경우
import {useState} from "react";

  const ChatSidebar = ({ onSelectRoom }: { onSelectRoom: (id: string) => void }) => {
  const { data, isLoading, error } = useGetChatRoomList();
//    const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;

 return (
    <div css={sidebar}>
      {data?.chatrooms.map((room) => (
        <div
          css={roomItem}
          key={room.chatroomId}
          onClick={() =>{
            console.log("🖱 채팅방 클릭됨:", room.chatroomId);
             onSelectRoom(room.chatroomId); // ✅ 이게 이제 동작하게 됨
          }}>
          ● {room.name}<br />
          <span>{room.lastMessage}</span>
        </div>
      ))}

      
    </div>
  );
};

export default ChatSidebar;