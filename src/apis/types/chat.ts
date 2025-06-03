export interface ChatRoom {
  chatroomId: number;
  name: string;
  lastMessage: string | null;
  updatedAt: string;
}

export interface ChatRoomListResponse {
  chatrooms: ChatRoom[];
}
