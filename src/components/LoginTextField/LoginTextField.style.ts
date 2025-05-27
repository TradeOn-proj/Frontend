import { css } from "@emotion/react";

export const container = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;
export const inputStyle = css`
  width: 656px;
  height: 86px;
  border: 1px solid #d4d4d4;
  background-color: rgba(254, 215, 119, 0.21);
  border-radius: 18px;
  padding: 10px;
  font-size: 20px;

  ::placeholder {
    color: #d4d4d4;
    display: flex;
    font-size: 20px;
  }

  &:focus {
    border: 2px solid #4d4637;
    outline: none;
  }
`;
