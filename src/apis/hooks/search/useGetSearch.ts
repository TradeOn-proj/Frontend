import { useQuery } from "@tanstack/react-query";
import { getAdvancedSearchPosts } from "apis/searchAPI";

const useGetSearch = (title: string) => {
  return useQuery({
    queryKey: ["advancedSearch", title],
    queryFn: () => getAdvancedSearchPosts(title),
    enabled: !!title,
  });
};

export default useGetSearch;
