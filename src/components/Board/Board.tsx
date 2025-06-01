import {container, imgContainer, titleContainer, content, title, date, infoContainer, tag, price, button} from "./Board.style";
import { Product } from "@assets/index";
import { useNavigate } from "react-router-dom";

interface BoardProps {
  post: {
    title: string;
    createdAt: string;
    averagePrice: number;
    postId: number;
    // 선택적으로 태그, 참여자 수 등이 추가될 수 있음
  };
}
const Board: React.FC<BoardProps>=({post})=>{
   const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/valuedetail/${post.postId}`);
  };
return(
    <div css={container}> 
        <div css={imgContainer}>
        <img src={Product} />
        </div> 
        <div css={content}>
            <div css={titleContainer}>        
              <div css={title}>{post.title}</div>
              <div css={date}>{post.createdAt}</div>
            </div>
            <div css={infoContainer}>
              <div css={tag} />
            </div>
            <div css={price}>{post.averagePrice.toLocaleString()}원</div>
            <div css={button} onClick={handleClick}>평가하러 가기</div>
        </div>
    </div>

);
};
export default Board;