import {css} from "@emotion/react";

export const baseStyle = css`
  border-radius: 10px;
  font-weight: 800;
  font-size: 16px;
  font-family: Pretendard;
  cursor: pointer;
  width: 160px;
  height: 49px;
  background: #4D4637;
`;

export const filledStyle = css`
  background-color: #4D4637;
  color: white;
  border: none;
`;

export const outlinedStyle = css`
  background-color: white;
  color: #4D4637;
  border: 1px solid #4D4637;
`;
