import {css} from "@emotion/react"

export const container = css`
  width: 1024px;
  height: 2089px;
  margin: 0 auto;
  margin-top: 50px;
`
export const title=css`
  color: #3C3636;
  font-size: 40px;
  font-weight: 800;
`
export const line=css`
  width: 1024px;
  height: 1px;
  background: #D4D4D4;
  margin-top: 39px;
  margin-bottom: 41px;
  `

  export const tabBar = css`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 132px;
`;

export const tab = css`
  color: #989BA2;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;

export const activeTab = css`
  ${tab};
  color: #3e83e9;
  font-weight: 600;
  font-size: 30px;
`;

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;