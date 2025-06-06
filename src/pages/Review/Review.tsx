import { useState } from "react";
import {container, section, title, line, productContainer
    ,comment, question, inputbox, scoreInputWrapper, scoreInput, scoreLabel
  ,textarea, buttonRow
} from "./Review.style";
import {Buttons} from "@components/index";
import { ProfileImg} from "@assets/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Review=() =>{
  const [content, setContent] = useState("");
   const navigate = useNavigate();
  const tradeId = 113;

     const [score, setScore] = useState<number | ''>('');


  const handleSubmit = async () => {
  if (!score || !content.trim()) {
    alert("점수와 후기를 모두 작성해주세요.");
    return;
  }

  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(
      `/api/v1/trades/${tradeId}/review`,
      {
        rating: score,
        comment: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        baseURL: import.meta.env.VITE_BASE_URL,
      }
    );

    console.log("✅ 후기 등록 성공:", response.data);
    alert("후기가 성공적으로 등록되었습니다.");
     navigate(`/mypage`);
    // 이동 또는 상태 변경
  } catch (err) {
    console.error("❌ 후기 등록 실패:", err);
    alert("후기 등록에 실패했습니다.");
  }
};


  const handleCancel = () => {
    // 페이지 이동 또는 이전으로
    console.log("취소됨");
  };

    return(
        <div css={container}>
        <div css={title}>후기 작성</div>
        <div css={line} />

         <div css={productContainer}>
          <img src={ProfileImg} />
        <div css={comment}>
          판매자와의 거래는 어떠셨나요? 솔직한 후기는 앞으로의 교환에 도움이 돼요.
        </div>
        </div>
        <div css={section}>
          <div css={question}>
          판매자와의 거래 점수를 평가해주세요.
        </div>   
  
        <div css={scoreInputWrapper}>
          <input
            type="number"
            css={scoreInput}
            value={score}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || (Number(val) >= 1 && Number(val) <= 5)) {
                setScore(val === '' ? '' : Number(val));
              }
            }}
            placeholder="0"
          />
          <span>/5</span>
        </div>
        </div>
         

    
      

      <div css={section}>
                 <div css={question}>자세한 후기를 작성해주세요.</div>
        <textarea
          css={textarea}
          placeholder="상품 설명을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div css={buttonRow}>
        <Buttons text="등록하기" type="filled" onClick={handleSubmit} />
        <Buttons text="취소하기" type="outlined" onClick={handleCancel} />
      </div>
    </div>
    )
}

export default Review;