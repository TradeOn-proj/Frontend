import { css } from "@emotion/react";

export const mainContainer = css`
  width: 1024px;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding-bottom: 222px;
`;

export const titleStyle = css`
  color: #3c3636;
  font-size: 32px;
  font-weight: 800;
`;

export const container = css`
  display: flex;
  flex-direction: row;
  gap: 77px;
`;

export const dataContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #3c3636;
  font-size: 20px;
  font-weight: 800;
  height: 400px;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
  padding: 40px 30px;
`;

export const chartContainer = css`
  display: flex;
  flex-direction: row;
  height: 300px;
  justify-content: space-between;
`;

export const barBox = css`
  height: 300px;
  width: 650px;
`;
export const pieBox = css`
  height: 350px;
  width: 480px;
`;
export const lineBox = css`
  width: 960px;
  height: 400px;
`;
