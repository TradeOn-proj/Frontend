import { useMutation } from "@tanstack/react-query";
import { patchUserCategories } from "apis/userAPI";
import type { patchCategoriesRequest } from "apis/types/user";

const usePatchUserCategories = (userId: number) => {
  return useMutation({
    mutationFn: (data: patchCategoriesRequest) =>
      patchUserCategories(userId, data),
  });
};

export default usePatchUserCategories;
