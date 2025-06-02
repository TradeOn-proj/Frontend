export interface postRegisterParams {
  username: string;
  email: string;
  password: string;
}

export interface registerResponse {
  msg: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface loginResponse {
  access_token: string;
  user: User;
}

export interface postLoginParams {
  username: string;
  password: string;
}

export interface userProfileResponse {
  id: number;
  username: string;
  email: string;
  current_points: number;
  cancellation_count: number;
  cancellation_warning: boolean;
  current_grade: string;
  grade_icon_url: string;
  registeredAt: string;
  total_trades: number;
  ongoing_trades: userProfileTrade[];
}

export interface userProfileTrade {
  trade_id: number;
  title: string;
  status: string;
  thumbnail_image_url: string;
  category: string;
  usercategories: string[];
}

export interface userProfileApiResponse {
  user: userProfileResponse;
}

export interface patchCategoriesRequest {
  categories: string[];
}

export interface getCategoriesResponse {
  msg: string;
  categories: (string | null)[];
}

export interface patchUserProfileRequest {
  username?: string;
  email?: string;
  profile_image_url?: string;
}

export interface patchUserProfileResponse {
  msg: string;
  user: {
    id: number;
    username: string;
    email: string;
    profile_image_url: string;
  };
}
