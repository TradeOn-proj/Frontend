export interface SearchPost {
  author_id: number;
  category: string;
  created_at: string;
  id: number;
  thumbnail_image_url: string;
  title: string;
}

export interface getSearchResponse {
  count: number;
  posts: SearchPost[];
}
