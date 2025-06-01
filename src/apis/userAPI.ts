import { apiPost } from "./apiUtils";
import type {
  loginResponse,
  postLoginParams,
  postRegisterParams,
  registerResponse,
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
