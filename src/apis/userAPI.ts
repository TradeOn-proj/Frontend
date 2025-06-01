import { apiPost, authApiGet, authApiPost } from "./apiUtils";
import type { postRegisterParams, registerResponse } from "./types/user";
import type {ValuationListParams, ValuationListResponse } from "./types/value";
import type {ValuationDetailResponse} from "./types/valuedetail";
import type { ValuationCreateRequest } from "./types/valueupload";
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

export const postValuation = async (data: ValuationCreateRequest) => {
  return await authApiPost<
    { postId: number }, // 응답 타입
    ValuationCreateRequest, // 바디 타입
    void // 파라미터 없음
  >("/api/v1/valuations", data);
};

