import { css } from "@emotion/react";

export const mainContainer = css`
  width: 1024px;
  padding-top: 50px;
  padding-bottom: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 108px;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const buttonEach = css`
  width: 173.39px;
  height: 224.39px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #3c3636;
  gap: 19px;
  align-items: center;
  font-weight: 700;
`;

export const iconStyle = css`
  height: 150px;
  width: 150px;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const title = css`
  display: flex;
  justify-content: space-between;

  font-size: 30px;
  font-weight: 700;
  color: #3c3636;
`;

export const buttonStyle = css`
  height: 32px;
  width: 32px;
`;

export const keyContent = css`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 8px;
  scrollbar-width: thin;
  -ms-overflow-style: auto;
`;

export const productContent = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;
