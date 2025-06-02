import { apiGet } from "./apiUtils";
import type { getSearchResponse } from "./types/search";

export const getAdvancedSearchPosts = async (title: string) => {
  const res = await apiGet<getSearchResponse, { title: string }>(
    "/api/v1/search/advanced",
    { title }
  );
  console.log("🔍 검색어:", title);

  console.log("📦 search API 응답:", res);
  return res;
};
