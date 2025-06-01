import { useQuery } from "@tanstack/react-query";
import type {ValuationListParams, ValuationListResponse } from "apis/types/value";
import {getValuationList} from "apis/userAPI";

const useGetValuationList = (params: ValuationListParams) => {
    console.log("📤 API 요청 파라미터:", params); // ← 이거 넣어보세요
  return useQuery<ValuationListResponse>({
    queryKey: ["valuationList", params],
    queryFn: () => getValuationList(params),
  });
};

export default useGetValuationList;
