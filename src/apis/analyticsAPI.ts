import { authApiGet } from "./apiUtils";
import type { AnalyticsResponse } from "./types/analytics";

export const getUserAnalytics = async (userId: number) => {
  const res = await authApiGet<AnalyticsResponse, undefined>(
    `/api/v1/analytics/user/${userId}`
  );
  return res;
};
