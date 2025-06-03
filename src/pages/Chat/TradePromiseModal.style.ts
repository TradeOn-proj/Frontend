/** TradePromiseModal.style.ts */
import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const modalContainer = css`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 660px;
  height: 410px;
  padding: 35px;
  background: white;
  border-radius: 12px;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const modalTitle = css`
  font-size: 24px;
font-style: normal;
color: #3C3636;
font-weight: 700;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 490px;
  height: 52px;
`;

export const titleContainer=css`
display: flex;
flex-direciton: row;
align-items: center;
margin-bottom: 15px;
`
export const titles=css`
color: #3C3636;
font-size: 16px;
font-style: normal;
font-weight: 500;
margin-right: 70px;
`
export const buttonRow = css`
  display: flex;
  justify-content: space-between;

`;

export const button = css`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  height: 60px;
`;

export const submitBtn = css`
  ${button};
  background-color: #3b82f6;
  color: white;
  width: 354px;
`;

export const cancelBtn = css`
  ${button};
  background-color: #e5e7eb;
  color: black;
  width: 207px;
`;
