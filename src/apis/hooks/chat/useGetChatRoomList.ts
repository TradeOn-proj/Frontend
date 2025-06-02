import { useQuery } from "@tanstack/react-query";
import { getChatRoomList } from "apis/userAPI"
import type { ChatRoomListResponse } from "apis/types/chat";

const useGetChatRoomList = () => {
  return useQuery<ChatRoomListResponse>({
    queryKey: ["chatRoomList"],
    queryFn: getChatRoomList,
  });
};

export default useGetChatRoomList;
