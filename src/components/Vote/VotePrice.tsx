/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {container, sliderWrapper, dotLeft, dotRight,
  slider, bubble, voteBtn,
} from "./VotePrice.style";

const VotePrice = () => {
  const [price, setPrice] = useState(50000);
  const min = 0;
  const max = 100000;
  const percent = ((price - min) / (max - min)) * 100;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div css={container}>
      <div css={sliderWrapper}>
        <div css={dotLeft} />
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={price}
          onChange={handleChange}
          css={slider(percent)}
        />
         <div css={bubble(percent)}>{price.toLocaleString()}원</div>
        <div css={dotRight} />
      </div>

      <button css={voteBtn}>투표하기</button>
    </div>
  );
};

export default VotePrice;
