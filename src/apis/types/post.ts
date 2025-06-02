export interface RecommendPost {
  id: number;
  category: string;
  title: string;
  status: string;
  thumbnail_image_url: string;
}

export interface postRecommendResponse {
  count: number;
  msg: string;
  posts: RecommendPost[];
}

export interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  user_id: number;
  created_at: string;
}

export interface getPostResponse {
  total: number;
  page: number;
  per_page: number;
  posts: Post[];
}

export interface getPostParams {
  category?: string;
  page?: number;
  per_page?: number;
}
