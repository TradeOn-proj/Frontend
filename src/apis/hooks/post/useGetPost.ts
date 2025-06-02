import { useQuery } from "@tanstack/react-query";
import { getPosts } from "apis/postAPI";

const useGetPost = (
  category?: string,
  page: number = 1,
  per_page: number = 10
) => {
  return useQuery({
    queryKey: ["posts", category, page, per_page],
    queryFn: () => getPosts({ category, page, per_page }),
  });
};

export default useGetPost;
