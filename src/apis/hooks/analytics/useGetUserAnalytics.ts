import { useQuery } from "@tanstack/react-query";
import { getUserAnalytics } from "apis/analyticsAPI";

const useGetUserAnalytics = (userId: number) => {
  return useQuery({
    queryKey: ["userAnalytics", userId],
    queryFn: () => getUserAnalytics(userId),
    enabled: !!userId,
  });
};

export default useGetUserAnalytics;
