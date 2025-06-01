import { useQuery } from "@tanstack/react-query";
import { getValuationDetail } from "apis/userAPI"; // or valuationAPI
import type { ValuationDetailResponse } from "apis/types/valuedetail";

const useGetValuationDetail = (postId: number) => {
  return useQuery<ValuationDetailResponse>({
    queryKey: ["valuationDetail", postId],
    queryFn: () => getValuationDetail(postId),
  });
};

export default useGetValuationDetail;
