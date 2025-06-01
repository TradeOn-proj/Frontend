import { apiPost, authApiGet } from "./apiUtils";
import type {
  loginResponse,
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
