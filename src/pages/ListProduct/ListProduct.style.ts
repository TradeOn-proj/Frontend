import { css } from "@emotion/react";

export const mainContainer = css`
  width: 1024px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const title = css`
  color: #3c3636;
  font-size: 40px;
  font-weight: 800;
`;

export const searchStyle = css`
  padding-top: 70px;
`;

export const textContainer = css`
  width: 100%;
  color: #383838;
  font-size: 16px;
  font-weight: 400;
  padding-top: 20px;
`;

export const pointStyle = css`
  color: #3e83e9;
  font-size: 16px;
  font-weight: 700;
`;

export const productContent = css`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;
