import { css } from "@emotion/react";

export const container = css`
  width: 1024px;
  height: 279px;
  border: 1px solid #d4d4d4;
  padding: 22px 25px;
`;

export const content = css`
  display: flex;
  flex-direction: row;
  gap: 46px;
`;

export const imageStyle = css`
  width: 235px;
  height: 235px;
  border-radius: 20px;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #3c3636;
  font-size: 25px;
  font-weight: 800;
`;

export const title = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 672px;
`;

export const subTitle = css`
  color: #676767;
  font-size: 20px;
  font-weight: 800;
`;

export const information = css`
  display: flex;
  flex-direction: column;
  gap: 115px;
`;

export const keyWordContainer = css`
  display: flex;
  flex-direction: row;
  gap: 26px;
`;
