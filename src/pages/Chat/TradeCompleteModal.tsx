/** TradeCompleteModal.tsx */
import { useState } from "react";
import {
  modalOverlay,
  modalContainer,
  modalTitle,
  buttonRow,
  submitBtn,
  cancelBtn,
  closeIcon,
  description,
} from "./TradeCompleteModal.style";
import axios from "axios";

interface Props {
  tradeId: number;
  onClose: () => void;
}

const TradeCompleteModal: React.FC<Props> = ({ tradeId, onClose }) => {
  const handleComplete = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.post(
        `/api/v1/trades/${tradeId}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          baseURL: import.meta.env.VITE_BASE_URL,
        }
      );
      if (res.status === 200) {
        alert("거래가 완료되었습니다.");
        onClose();
      }
    } catch (err) {
      console.error("거래 완료 실패:", err);
      alert("거래 완료에 실패했습니다.");
    }
  };

  return (
    <div css={modalOverlay}>
      <div css={modalContainer}>
        <div css={modalTitle}>
          거래를 완료하시겠어요?
          <button css={closeIcon} onClick={onClose}>✖</button>
        </div>
        <div css={description}>거래완료 후에는 거래를 취소할 수 없어요.</div>
        <div css={buttonRow}>
          <button css={cancelBtn} onClick={onClose}>취소</button>
          <button css={submitBtn} onClick={handleComplete}>거래완료</button>
        </div>
      </div>
    </div>
  );
};

export default TradeCompleteModal;
