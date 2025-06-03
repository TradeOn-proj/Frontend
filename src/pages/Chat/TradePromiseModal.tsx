/** TradePromiseModal.tsx */
import {
  modalOverlay,
  modalContainer,
  modalTitle,
  input,
  buttonRow,
  submitBtn,
  cancelBtn, titles, titleContainer
} from "./TradePromiseModal.style";
import { useState } from "react";
import axios from "axios";

interface Props {
  chatroomId: number;
  onClose: () => void;
  onSuccess: (date: string) => void; // 🔥 추가
}

const TradePromiseModal: React.FC<Props> = ({ chatroomId, onClose, onSuccess }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.post(
        "/api/v1/chatrooms/trade-promise",
        { title, location, date, chatroomId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          baseURL: import.meta.env.VITE_BASE_URL,
        }
      );

      if (res.status === 201) {
        alert("약속이 등록되었습니다.");
        onSuccess(date); // 🔥 등록된 날짜 전달
        onClose();
      }
    } catch (err) {
      console.error("약속 등록 실패:", err);
      alert("약속 등록에 실패했습니다.");
    }
  };


  return (
    <div css={modalOverlay}>
      <div css={modalContainer}>
        <div css={modalTitle}>거래 약속 설정</div>
        <div css={titleContainer} >
        <div css={titles}>날짜</div>
        <input
          css={input}
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        </div>
        <div css={titleContainer} >
        <div css={titles}>제목</div>
        <input
          css={input}
          type="text"
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></div>
        <div css={titleContainer} >
        <div css={titles}>장소</div>
        <input
          css={input}
          type="text"
          placeholder="장소 입력"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /></div>
        <div css={buttonRow}>
          <button css={cancelBtn} onClick={onClose}>취소</button>
          <button css={submitBtn} onClick={handleSubmit}>다음으로</button>
        </div>
      </div>
    </div>
  );
};

export default TradePromiseModal;
