/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useParams } from "react-router-dom";
import usePostValuationPrice from "apis/hooks/value/usePostValuationPrice";
import {container, sliderWrapper, dotLeft, dotRight,
  slider, bubble, voteBtn,
} from "./VotePrice.style";

const VotePrice = () => {
  // const [price, setPrice] = useState(50000);
  // const min = 0;
  // const max = 100000;
  // const percent = ((price - min) / (max - min)) * 100;
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrice(Number(e.target.value));
  // };
 const [price, setPrice] = useState(50000);
  const { postId } = useParams<{ postId: string }>();
  const { mutate } = usePostValuationPrice();
  const min = 0;
  const max = 1000000;
  const percent = Math.min(100, Math.max(0, ((price - min) / (max - min)) * 100));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleVote = () => {
    if (!postId) return alert("게시글 ID 없음");
    mutate(
      { postId: Number(postId), price },
      {
        onSuccess: () => {
          alert("투표가 완료되었습니다!");
        },
        onError: (error: any) => {
        if (error?.response?.status === 400) {
          alert("한 게시글 당 한 번만 투표할 수 있습니다.");
        } else {
          alert("투표 중 오류가 발생했습니다.");
        }
        },
      }
    );
  };
  return (
    <div css={container}>
      <div css={sliderWrapper}>
        <div css={dotLeft} />
        <input
          type="range"
          min={min}
          max={max}
          step={10000}
          value={price}
          onChange={handleChange}
          css={slider(percent)}
        />
            <div css={bubble()}>
          {price.toLocaleString()}원
        </div>
        <div css={dotRight} />
      </div>

      <button css={voteBtn}
      onClick={handleVote}>투표하기

      </button>
    </div>
  );
};

export default VotePrice;
