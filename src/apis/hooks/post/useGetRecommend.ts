import { useQuery } from "@tanstack/react-query";
import { getRecommendPosts } from "apis/postAPI";

const useGetRecommendPosts = () => {
  return useQuery({
    queryKey: ["recommendedPosts"],
    queryFn: getRecommendPosts,
  });
};

export default useGetRecommendPosts;
