import { Product } from "@assets/index";
import {
  container,
  contentStyle,
  imageStyle,
  textContainer,
  titleStyle,
} from "./Card.style";

const Card: React.FC = () => {
  return (
    <div css={container}>
      <div css={imageStyle}>
        <img src={Product} />
        <div css={textContainer}>
          <div css={titleStyle}>아이더 바람막이 자켓</div>
          <div css={contentStyle}>#남성의류 #바람막이 </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
