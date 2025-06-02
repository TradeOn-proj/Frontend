import {css} from "@emotion/react";
export const sidebar = css`
  width: 349px;
  background: #f5f5f5;
  border-right: 1px solid #ddd;
`;

export const roomItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  border-bottom: 1px solid #E0E0E2;
  width: 349px;
  height: 80px;
  color: #3C3636;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  span {
    color: #46474C;
    font-size: 14px;
    font-weight: 600;
    margin-top: 6px;
  }

`;
