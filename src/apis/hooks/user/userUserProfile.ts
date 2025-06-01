import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "apis/userAPI";

const useUserProfile = (userId: number) => {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getUserProfile(userId),
    enabled: !!userId,
  });
};

export default useUserProfile;
