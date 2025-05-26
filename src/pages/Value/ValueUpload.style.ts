import {css} from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  height: 1512px;
  width: 1024px;
  margin: 0 auto;

`
export const title = css`
  color: #3C3636;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 800; 
  margin-top: 89px;
`
export const line = css`
  width : 1024px;
  height: 1px;
  background: #D4D4D4;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const label = css`
  display: block;
  width: 95px;
  color: #3C3636;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 16px;
`

export const input = css `
  width: 1024px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  background: #FFF;
  padding-left: 22px;
  color: #676767;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  outline: none;
  margin-bottom: 55px;
` 

export const input2 = css `
  width: 462px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  background: #FFF;
  padding-left: 22px;
  color: #676767;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  outline: none;
  margin-bottom: 55px;
` 

export const row=css`
  display: flex;
  flex-direction : row;
`

export const column=css`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const keywordInputWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  position: relative;
  width: 100%;
`;

export const keywordInputStyle = css`
  width: 462px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  background: #FFF;
  padding-left: 22px;
  color: #676767;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  outline: none;
  padding : 0 40px 0 12px;
`;

export const keywordList = css`
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
  margin-top: 31px;
`;

export const searchbtn = css `
  width : 27px;
  height: 29px;
  background: none;
  position: absolute;
  left: 429px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const keywordBox = css`
  position: relative;
  border-radius: 36px;
  background: #4D4637;
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  padding-top: 13.3px;
  width: 180px;
  height: 49px;
`;

export const deletebtn = css `
  background: none;
  border: none;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 27px;
  height: 27px;
`

export const imageBox=css`
  width: 463px;
  height: 211px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const image = css`
  width: 100px;
  height: 100px;
  
`

export const textarea = css`
  border: 1px solid #d4d4d4;
  outline: none;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  background: #FFF;
  padding-left: 22px;
  padding-top: 24px;
  color: #676767;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  width: 1024px;
  height: 344px;
`

export const fileBtn = css `
  border-radius: 10px;
  background: #3E83E9;
  width: 96px;
  height: 42px;
  color: #FFF;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  margin-left: 359px;
  margin-top: 24px;
`

export const buttonRow = css`
  margin-top: 101px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`