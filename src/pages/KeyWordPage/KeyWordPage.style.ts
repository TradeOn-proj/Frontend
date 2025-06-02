import { css } from "@emotion/react";

export const mainContainer = css`
  width: 1024px;
  padding-top: 300px;
  padding-bottom: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const keyWordContainer = css`
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const titleStyle = css`
  font-size: 40px;
  color: #3c3636;
  font-weight: 800;
`;

export const textBox = css`
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const textStyle = css`
  color: red;
  padding-left: 10px;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #393940;
`;

export const buttonStyle = css`
  margin-top: 100px;
  width: 200px;
`;

export const btnContainer = css`
  display: flex;
  width: 114px;
  height: 44px;
  padding: 14px 27px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3e83e9;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Pretendard;
`;

export const searchStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
