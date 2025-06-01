import { css } from "@emotion/react";

export const container = css`
  height: 38px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding-top: 5px;
`;
export const titleContainer = css`
  display: flex;
  align-items: center;
  width: 110px;
`;
export const titleStyle = css`
  color: #3e83e9;
  font-size: 22px;
  font-weight: 600;
`;
export const valueContainer = css`
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const valueStyle = css`
  width: 110px;
  font-size: 22px;
  font-weight: 600;
  color: #3e83e9;
  text-align: center;
`;
export const fireIconStyle = css`
  width: 16px;
  height: 16px;
`;
export const temperatureBarContainer = css`
  display: flex;
  width: 379px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const temperatureBase = css`
  width: 100%;
  height: 14px;
  border-radius: 10px;
  background: #cdd1d5;
`;

export const temperatureRange = (temperature: number) => css`
  width: ${temperature}%;
  height: 100%;
  border-radius: 10px;
  background: #3e83e9;
  animation: grow 0.5s ease-out;

  @keyframes grow {
    from {
      width: 0%;
    }
    to {
      width: ${temperature}%;
    }
  }
`;

export const hiddenStyle = css`
  display: none;
`;
