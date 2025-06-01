import { useMutation } from "@tanstack/react-query";
import type { postRegisterParams } from "apis/types/user";
import { postRegister } from "apis/userAPI";

const usePostRegister = () => {
  return useMutation({
    mutationFn: (data: postRegisterParams) => postRegister(data),
  });
};

export default usePostRegister;
