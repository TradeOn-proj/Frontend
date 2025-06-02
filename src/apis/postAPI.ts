import { authApiGet } from "./apiUtils";
import type {
  getPostParams,
  getPostResponse,
  postRecommendResponse,
  RecommendPost,
} from "./types/post";

export const getRecommendPosts = async (): Promise<RecommendPost[]> => {
  const res = await authApiGet<postRecommendResponse, undefined>(
    "/api/v1/posts/recommend"
  );
  return res.posts;
};

export const getPosts = async (
  params?: getPostParams
): Promise<getPostResponse> => {
  const res = await authApiGet<getPostResponse, getPostParams>(
    "/api/v1/posts",
    params
  );
  return res;
};
