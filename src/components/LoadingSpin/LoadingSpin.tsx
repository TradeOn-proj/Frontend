import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spinnerStyle = css`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3e83e9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 40px auto;
`;

const LoadingSpinner = () => <div css={spinnerStyle} />;

export default LoadingSpinner;
