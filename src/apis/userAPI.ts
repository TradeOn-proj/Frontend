import { apiPost } from "./apiUtils";
import type { postRegisterParams, registerResponse } from "./types/user";

export const postRegister = async (data: postRegisterParams) => {
  return apiPost<registerResponse, postRegisterParams>(
    "/api/v1/users/register",
    data
  );
};
