import { apiPost, authApiGet, authApiPatch, authApiPost } from "./apiUtils";
import type { ValuationListParams, ValuationListResponse } from "./types/value";
import type { ValuationDetailResponse } from "./types/valuedetail";
import type { ValuationCreateRequest } from "./types/valueupload";
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
