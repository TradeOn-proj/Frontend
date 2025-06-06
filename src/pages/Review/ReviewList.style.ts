import { css } from "@emotion/react";

export const container = css`
  width: 1024px;
  margin: 0 auto;
  padding: 40px 20px;
  height: 1400px;
`;

export const title = css`
  font-size: 32px;
  font-weight: 800;
`;

export const line = css`
  margin: 20px 0;
  height: 1px;
  background-color: #ddd;
`;

export const reviewCard = css`
  display: flex;
  align-items: center;
  padding: 40px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  height: 200px;
`;

export const profileImage = css`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eee;
  object-fit: cover;
  margin-right: 16px;
`;

export const userInfo = css`
  margin-left: 20px;
  flex: 1;
`;

export const userName = css`
  color: #3C3636;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 800;
  margin-bottom: 8px;
`;

export const commentText = css`
  font-size: 20px;
  line-height: 1.5;
  width: 700px;
`;

export const ratingBox = css`
  position: absolute;
  top: 40px;
  right: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const starIcon = css`
  color: #f5b301;
  margin-right: 4px;
`;
