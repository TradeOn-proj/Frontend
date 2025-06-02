import { useQuery } from "@tanstack/react-query";
import { getUserCategories } from "apis/userAPI";

const useGetUserCategories = (userId: number) => {
  return useQuery({
    queryKey: ["userCategories", userId],
    queryFn: () => getUserCategories(userId),
    enabled: !!userId,
  });
};

export default useGetUserCategories;
