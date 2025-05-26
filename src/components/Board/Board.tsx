import {container, imgContainer, titleContainer, content, title, date, infoContainer, people, tag, price, button} from "./Board.style";
import { Product } from "@assets/index";

const Board: React.FC = () => {
return(
    <div css={container}> 
        <div css={imgContainer}>
        <img src={Product} />
        </div> 
        <div css={content}>
            <div css={titleContainer}>        
              <div css={title}>아이더 바람막이 자켓</div>
              <div css={date}>2025년 3월 1일</div>
            </div>
            <div css={infoContainer}>
              <div css={tag}>#남성의류 #바람막이</div>
              <div css={people}>234명 참여 중</div>
            </div>
            <div css={price}>30,000원</div>
            <div css={button}>평가하러 가기</div>
        </div>
    </div>

);
};
export default Board;