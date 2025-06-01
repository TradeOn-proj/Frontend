import { useMutation } from "@tanstack/react-query";
import { postValuationPrice } from "apis/userAPI"; // 또는 valuationAPI

const usePostValuationPrice = () => {
  return useMutation({
    mutationFn: ({ postId, price }: { postId: number; price: number }) =>
      postValuationPrice(postId, price),
  });
};

export default usePostValuationPrice;
