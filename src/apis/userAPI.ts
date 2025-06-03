import { apiPost, authApiGet, authApiPatch, authApiPost } from "./apiUtils";
import type { ValuationListParams, ValuationListResponse } from "./types/value";
import type { ValuationDetailResponse } from "./types/valuedetail";
import type { ValuationCreateRequest } from "./types/valueupload";
import type { ChatRoomListResponse } from "./types/chat";
import type { PostDetailResponse } from "./types/postdetail"
import type {TradeProposalRequest} from "./types/trade"
import type {
  getCategoriesResponse,
  loginResponse,
  patchCategoriesRequest,
  patchUserProfileRequest,
  patchUserProfileResponse,
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

export const getValuationDetail = async (
  postId: number
): Promise<ValuationDetailResponse> => {
  return await authApiGet<ValuationDetailResponse, void>(
    `/api/v1/valuations/${postId}`
  );
};

export const postValuationPrice = async (postId: number, price: number) => {
  return await authApiPost<void, { price: number }, void>(
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
  return await authApiPost<{ postId: number }, ValuationCreateRequest, void>(
    "/api/v1/valuations",
    data
  );
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

export const patchUserCategories = async (
  userId: number,
  data: patchCategoriesRequest
) => {
  const res = await authApiPatch<void, patchCategoriesRequest, undefined>(
    `/api/v1/users/${userId}/categories`,
    data
  );
  return res;
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


export const getUserCategories = async (userId: number) => {
  const res = await authApiGet<getCategoriesResponse, undefined>(
    `/api/v1/users/${userId}/categories`
  );
  return res.categories.filter((c): c is string => c !== null); // null 제거
};

export const patchUserProfile = async (
  userId: number,
  data: patchUserProfileRequest
): Promise<patchUserProfileResponse> => {
  const res = await authApiPatch<
    patchUserProfileResponse,
    patchUserProfileRequest,
    undefined
  >(`/api/v1/users/${userId}/profile`, data);
  return res;
};

export const postTradeProposal = async (data: TradeProposalRequest) => {
  return await authApiPost<void, TradeProposalRequest, void>(
    "/api/v1/trades",
    data
  );
};