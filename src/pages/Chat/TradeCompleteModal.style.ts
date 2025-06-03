// TradeCompleteModal.style.ts
import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const modalContainer = css`
  width: 420px;
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const modalTitle = css`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
`;

export const description = css`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

export const buttonRow = css`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const cancelBtn = css`
  padding: 8px 18px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;

export const submitBtn = css`
  padding: 8px 18px;
  font-size: 14px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const closeIcon = css`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 18px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
`;
