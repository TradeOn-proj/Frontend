import {css} from "@emotion/react";

export const container = css`
  width: 1024px;
  height: 1512px;
  margin: 0 auto;
  margin-top: 89px;
`
export const title = css`
  color: #3C3636;
  font-size: 32px;
  font-weight: 800;
`
export const line = css`
  background: #D4D4D4;
  width: 1024px;
  height: 1px;
  margin-top : 20px;
`
export const productContainer = css`
  display: flex;
  gap: 35px;
  margin-top: 46px;
  margin-bottom: 58px;
  img {
    width: 157px;
    height: 157px;
    border-radius: 20px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #989BA2;
  }
`;

export const comment = css`
color: #3C3636;
  font-size: 20px;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 10px;
  
`

export const inputbox = css`
`

export const productName=css`
  color: #3C3636;
  font-size: 28px;
  font-weight: 800;
`

export const keyword=css`
  color: #676767;
  font-size: 20px;
  font-weight: 800;
  margin-top: 18px;
`
export const section=css`
`
export const ratingGroup=css`
  display: flex;
  gap: 77px;
`
export const question=css`
  color: #3C3636;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 22px;
`
export const ratingBtn = css`
  border-radius: 10px;
  border: 1px solid #676767;
  background: #FFF;
  cursor: pointer;
  width: 290px;
  height: 50px;
  color: #3C3636;
  font-size: 20px;
  font-weight: 600;
  gap: 77px;
  margin-bottom: 85px;
`;

export const activeRatingBtn = css`
  ${ratingBtn};
  background: #4d4637;
  color: white;
  border-color: #4d4637;
`;

export const textarea = css`
  width: 100%;
  height: 344px;
  padding: 27px;
  font-size: 16px;
  font-weight: 600;
  color: #676767;
  border: 1px solid #676767;
  border-radius: 10px;
  outline: none;
  resize: none;
`;

export const buttonRow = css`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 122px;
`;

export const scoreLabel = css`
  font-weight: 500;
  margin-bottom: 8px;
  text-align: center;
`;

export const scoreInputWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
`;

export const scoreInput = css`
  width: 400px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
`;