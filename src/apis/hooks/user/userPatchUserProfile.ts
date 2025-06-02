import { useMutation } from "@tanstack/react-query";
import { patchUserProfile } from "apis/userAPI";
import type { patchUserProfileRequest } from "apis/types/user";

const usePatchUserProfile = (userId: number) => {
  return useMutation({
    mutationFn: (data: patchUserProfileRequest) =>
      patchUserProfile(userId, data),
  });
};

export default usePatchUserProfile;
