import { css } from "@emotion/react";

export const mainContainer = css`
  width: 1024px;
  padding-top: 180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-bottom: 200px;
`;

export const titleContainer = css`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3c3636;
  font-size: 40px;
  font-weight: 800;
  /* border-bottom: solid 1px #d4d4d4; */
  gap: 10px;
  padding-bottom: 30px;
`;

export const textFieldContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const dividerWrapper = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const divider = css`
  flex: 1;
  height: 1px;
  background-color: #d4d4d4;
`;

export const dividerText = css`
  color: #7a7a7a;
  font-size: 18px;
  white-space: nowrap;
`;
