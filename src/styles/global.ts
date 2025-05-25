import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    font-family: "Pretendard", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input,
  textarea,
  select {
    font-family: inherit;
  }
`;
