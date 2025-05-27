import { css } from "@emotion/react";

export const container = (mode: "login" | "signin") => css`
  width: 656px;
  height: 80px;
  display: flex;
  color: ${mode === "signin" ? "#4d4637" : "white"};
  font-size: 25px;
  font-weight: 700;
  background-color: ${mode === "signin" ? "white" : "#4d4637"};
  border-radius: 18px;
  border: ${mode === "signin" ? "2px solid #4d4637" : "none"};
  align-items: center;
  justify-content: center;
`;
