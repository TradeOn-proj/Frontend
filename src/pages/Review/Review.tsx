import { useState } from "react";
import {container, section, title, line, productContainer, productInfo, productName, keyword
    ,ratingGroup, ratingBtn, activeRatingBtn, question,
  textarea, buttonRow
} from "./Review.style";
import { Product } from "@assets/index";
import {Buttons} from "@components/index";

const Review=() =>{
  const [productRating, setProductRating] = useState<number | null>(1);
  const [sellerRating, setSellerRating] = useState<number | null>(2);
  const [content, setContent] = useState("");

  const ratingOptions = ["별로예요", "괜찮아요", "매우 만족해요"];
    
    return(
        <div css={container}>
        <div css={title}>후기 작성</div>
        <div css={line} />

         <div css={productContainer}>
          <img src={Product} />
          <div css={productInfo}>
            <div css={productName}>아이더 바람막이 자켓</div>
            <div css={keyword}>#남성의류 #바람막이</div>
          </div>
        </div>
         <div css={section}>
         <div css={question}>구매하신 상품은 만족하시나요?</div>
        <div css={ratingGroup}>
          {ratingOptions.map((opt, idx) => (
            <button
              key={idx}
              css={productRating === idx ? activeRatingBtn : ratingBtn}
              onClick={() => setProductRating(idx)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div css={section}>
                <div css={question}>판매자와의 거래는 어땠나요?</div>
        <div css={ratingGroup}>
          {ratingOptions.map((opt, idx) => (
            <button
              key={idx}
              css={sellerRating === idx ? activeRatingBtn : ratingBtn}
              onClick={() => setSellerRating(idx)}
            >
              {opt}
            </button>
          ))}
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
        <Buttons text="등록하기" type="filled" onClick={() => { /* 등록 처리 */ }} />
        <Buttons text="취소하기" type="outlined" onClick={() => { /* 페이지 이동 or 취소 */ }} />
      </div>
    </div>
    )
}

export default Review;