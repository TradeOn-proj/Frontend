import { postValuationFormData } from "apis/userAPI"; // 새로 만든 파일

const usePostValuation = () => {
  const submit = async (formData: FormData) => {
    return await postValuationFormData(formData); // ✅ FormData 전송
  };

  return submit;
};

export default usePostValuation;
