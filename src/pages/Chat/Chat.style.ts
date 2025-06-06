import { css } from "@emotion/react";

export const container = css`
  display: flex;
   height: 80vh;         // 화면 높이 100%
  width: 100vw;          // 화면 너비 100%
  font-family: Pretendard;

`;

export const chatArea = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const chatHeader = css`
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border-bottom: 1px solid #E0E0E2;
`;
export const reservationTag = css`
  background-color: #3b82f6;
  color: white;
  font-size: 12px;
  padding: 4px 10px;
  margin-left: 20px;
  border-radius: 12px;
  height: 25px;
`;

export const chatPerson= css`
font-size: 22px;
color: #3C3636;
font-weight: 600;
display: flex;
align-items: center;
`
export const grayBtn = css`
  background: #f1f1f1;
  border-radius: 20px;
  padding: 6px 16px;
  margin-right: 12px;
  border: none;
  cursor: pointer;
`;

export const blackBtn = css`
  border-radius: 36px;
background: #4D4637;
color: white;
text-align: center;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
  border: none;
  cursor: pointer;
  width: 141px;
height: 35px;
margin-right: 13px;
`;

export const messageList = css`
  flex: 1;
  padding: 24px 40px;
  overflow-y: auto;
  height: 800px;
`;

export const msgMe = css`
  background: #3e83e9;
  color: white;
  padding: 10px 16px;
  border-radius: 12px;
  margin-left: auto;
  max-width: 400px;
  margin-bottom: 16px;
  position: relative;
`;

export const msgOther = css`
  background: #eee;
  padding: 10px 16px;
  border-radius: 12px;
  max-width: 400px;
  margin-bottom: 16px;
`;

export const time = css`
  display: block;
  font-size: 11px;
  text-align: right;
  margin-top: 4px;
  color: #aaa;
  margin-right: 10px;
`;

export const dateDivider = css`
  text-align: center;
  margin: 24px 0;
  color: #aaa;
  font-size: 12px;
`;

export const scheduleBox = css`
  background: #f2f2f2;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const inputArea = css`
  display: flex;
  padding: 12px 24px;
  border-top: 1px solid #eee;
  background: #f9f9f9;
`;

export const inputBox = css`
  flex: 1;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  outline: none;
`;

export const sendBtn = css`
  background: transparent;
  border: none;
  font-size: 24px;
  margin-left: 12px;
  cursor: pointer;
`;
