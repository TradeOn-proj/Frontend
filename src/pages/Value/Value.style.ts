import {css} from "@emotion/react";

export const container = css `
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 0 auto;
  width : 1024px;
  height:  1512px;
  background: #FFF;
  flex-direction: column;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: row;
  margin-top: 108px;
`;

export const title = css`
  color: #3C3636;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 800;  
  width: 389px;
  height: 50px;
`;

export const btnContainer = css`
  display: flex;
  width: 114px;
  height: 44px;
  padding: 14px 27px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3E83E9;
  color: #FFF;
  font-size: 12px;
  font-weight: 600;
  font-family: Pretendard;
  margin-left: 522px;
`;

export const line = css`
  width : 1024px;
  height: 1px;
  background: #D4D4D4;
  margin-top: 10px;
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 99px;
  text-align: center;
  align-items: center;
  padding: 0;
`;

export const arrow = css`
  /* font-size: 18px; */
  color: #FED777;
  cursor: pointer;
  width: 17px;
  height: 17px;
  font-weight: 1000;
  margin-top: -5px;
`;

export const pageBtn = css`
  color: #444;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 600;
  background: none;
  width: 35px;
  height: 35px;
  font-size: 20px;
   display: flex;
  justify-content: center;
  align-items: center;
`;

export const activePage = css`
  background:#FED777;
  color: white;
  font-weight: 700;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  width: 35px;
  height: 35px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;