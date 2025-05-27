import { css } from "@emotion/react";

export const card = css`
  display: flex;
  border: 1px solid #D4D4D4;
  border-radius: 20px;
  padding: 16px;
  width: 1024px;
  height: 279px; 
`;

export const image = css`
  width: 235px;
  height: 235px;
  object-fit: cover;
  margin-right: 46px;
`;

export const info = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const title = css`
  font-size: 25px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 29px;
  color: #444;
`;

export const status = css`
  color: #FFF;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 36px;
  background: #C7C7C7;
  width: 129px;
  height: 35px;
`;

export const dot = css`
  margin-left: auto;
  font-size: 30px;
  cursor: pointer;
  color: #989BA2;
`;

export const tags = css`
  font-size: 20px;
  color: #676767;
  font-weight: 800;
  margin-top: 18px;
`;

export const reviewBtn = css`
  background: #3C3C3C;
  color: white;
  border: none;
  margin-top: 110px;
  border-radius: 10px;
  cursor: pointer;
  width: 608px;
  height: 54px;
  font-size: 20px;
  font-weight: 600;
`;
