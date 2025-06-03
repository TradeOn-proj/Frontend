import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "apis/userAPI";
import type { PostDetailResponse } from "apis/types/postdetail";

const useGetPostDetail = (postId: number) => {
  return useQuery<PostDetailResponse>({
    queryKey: ["postDetail", postId],
    queryFn: () => getPostDetail(postId),
  });
};

export default useGetPostDetail;
