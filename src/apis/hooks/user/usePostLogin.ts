import { useMutation } from "@tanstack/react-query";
import type { postLoginParams } from "apis/types/user";
import { postLogin } from "apis/userAPI";

const usePostLogin = () => {
  return useMutation({
    mutationFn: (data: postLoginParams) => postLogin(data),
  });
};

export default usePostLogin;
