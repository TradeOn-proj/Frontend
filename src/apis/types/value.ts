export interface ValuationListParams {
  page?: number;
  per_page?: number;
  category?: string;
}

export interface ValuationPost {
  postId: number;
  title: string;
  averagePrice: number;
  createdAt: string;
}

export interface ValuationListResponse {
  page: number;
  per_page: number;
  total: number;
  posts: ValuationPost[];
}