import { css } from "@emotion/react";

export const container = css`
  width: 850px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
`;

export const sliderWrapper = css`
  position: relative;
  width: 100%;
`;

export const slider = (percent: number) => css`
  width: 100%;
  appearance: none;
  height: 5px;
  background: linear-gradient(to right, #3e83e9 0%, #3e83e9 ${percent}%, #ccc ${percent}%, #ccc 100%);
  outline: none;
  border-radius: 10px;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 50px;
    height: 50px;
    background: #3e83e9;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: #3e83e9;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const bubble = (percent: number) => css`
  position: absolute;
  top: 40px;
  left: ${percent}%;
  transform: translateX(-50%);
  background: #3e83e9;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  pointer-events: none;
  width: 140px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const dotLeft = css`
  position: absolute;
  top: 50%;
  left: 0;
  width: 19px;
  height: 19px;
  background: #3e83e9;
  border-radius: 50%;
  transform: translateY(-30%);
`;

export const dotRight = css`
  position: absolute;
  top: 50%;
  right: 0;
  width: 19px;
  height: 19px;
  background: #ccc;
  border-radius: 50%;
  transform: translateY(-30%);
`;


export const voteBtn = css`
  width: 300px;
  height: 54px;
  background: #3C3C3C;
  color: white;
  font-weight: 800;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 16px;
  margin-top: 200px;
`;
