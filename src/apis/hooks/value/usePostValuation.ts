import { postValuation } from "apis/userAPI";
import type { ValuationCreateRequest } from "apis/types/valueupload";

const usePostValuation = async (data: ValuationCreateRequest) => {
  return await postValuation(data);
};

export default usePostValuation;
