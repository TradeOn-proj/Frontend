import { useQuery } from "@tanstack/react-query";
import { getRecommendPosts } from "apis/postAPI";

const useGetRecommendPosts = (enabled: boolean) => {
  return useQuery({
    queryKey: ["recommendedPosts"],
    queryFn: getRecommendPosts,
    enabled,
  });
};

export default useGetRecommendPosts;
