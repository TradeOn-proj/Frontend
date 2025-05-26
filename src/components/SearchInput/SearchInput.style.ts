import { css } from "@emotion/react";

export const searchInputStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;

export const inputStyle = css`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  width: 486px;
  height: 59px;
  padding: 7px 18px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #d4d4d4;
  color: #3c3636;
  box-shadow: 0px 4px 12px 0px rgba(13, 10, 44, 0.06);

  ::placeholder {
    color: #d4d4d4;
  }
  &:focus {
    border: 1px solid #3e83e9;
    outline: none;
  }
`;

export const buttonStyle = css`
  cursor: pointer;
  display: inline-flex;
  border: none;
  width: 39px;
  height: 39px;
  border-radius: 50%;
`;

export const iconStyle = css`
  width: 39px;
  height: 39px;
`;
