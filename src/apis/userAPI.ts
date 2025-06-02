import { apiPost, authApiGet, authApiPost } from "./apiUtils";
import type {ValuationListParams, ValuationListResponse } from "./types/value";
import type {ValuationDetailResponse} from "./types/valuedetail";
import type { ValuationCreateRequest } from "./types/valueupload";
import type { ChatRoomListResponse } from "./types/chat";
import type { PostDetailResponse } from "./types/postdetail"

import type {
  loginResponse,
  postLoginParams,
  postRegisterParams,
  registerResponse,
  userProfileApiResponse,
} from "./types/user";
import axios from "axios";

export const postRegister = async (data: postRegisterParams) => {
  return apiPost<registerResponse, postRegisterParams>(
    "/api/v1/users/register",
    data
  );
};

export const getValuationList = async (
  params: ValuationListParams
): Promise<ValuationListResponse> => {
  const res = await authApiGet<ValuationListResponse, ValuationListParams>(
    "/api/v1/valuations",
    params
  );
  return res;
};

export const getValuationDetail = async (postId: number): Promise<ValuationDetailResponse> => {
  return await authApiGet<ValuationDetailResponse, void>(
    `/api/v1/valuations/${postId}`
  );
};

export const postValuationPrice = async (postId: number, price: number) => {
  return await authApiPost<void, { price: number }, void >(
    `/api/v1/valuations/${postId}/price`,
    { price }
  );
};
export const postValuationFormData = async (formData: FormData) => {
  const token = localStorage.getItem("accessToken");
  console.log("📤 [postValuationFormData] 요청 시작");
  for (let [key, value] of formData.entries()) {
    console.log("FormData:", key, value);
  }

  const response = await axios.post("/api/v1/valuations", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      // Content-Type 생략!
    },
    baseURL: import.meta.env.VITE_BASE_URL,
  });

  console.log("✅ [postValuationFormData] 응답 성공:", response.data);
  return response;
};

export const postValuation = async (data: ValuationCreateRequest) => {
  return await authApiPost<
    { postId: number }, // 응답 타입
    ValuationCreateRequest, // 바디 타입
    void // 파라미터 없음
  >("/api/v1/valuations", data);
};

export const postLogin = async (data: postLoginParams) => {
  return apiPost<loginResponse, postLoginParams>("/api/v1/users/login", data);
};

export const getUserProfile = async (userId: number) => {
  const res = await authApiGet<userProfileApiResponse, undefined>(
    `/api/v1/users/${userId}/profile`,
    undefined
  );
  return res.user;
};


export const getChatRoomList = async (): Promise<ChatRoomListResponse> => {
  const res = await authApiGet<ChatRoomListResponse, undefined>(
    "/api/v1/chatrooms",
    undefined
  );
  return res;
};

export const getPostDetail = async (postId: number): Promise<PostDetailResponse> => {
  return await authApiGet<PostDetailResponse, void>(
    `/api/v1/posts/${postId}`
  );
};

// ✅ FormData를 multipart/form-data로 전송하는 함수
export const postProductFormData = async (formData: FormData) => {
  const token = localStorage.getItem("accessToken");
  console.log("📤 [postFormData] 요청 시작");
  for (let [key, value] of formData.entries()) {
    console.log("FormData:", key, value);
  }
  const response = await axios.post("/api/v1/posts", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      // ❌ Content-Type은 지정하지 마세요. axios가 boundary 포함 자동 설정함
    },
    baseURL: import.meta.env.VITE_BASE_URL,
  });
console.log("✅ [postFormData] 응답 성공:", response.data);
  return response;
};

