import { Product, Vector } from "@assets/index";
import {
  container,
  content,
  imageStyle,
  information,
  keyWordContainer,
  subTitle,
  title,
  titleContainer,
} from "./TradingCard.style";
import KeyWord from "@components/Badge/KeyWord/KeyWord";

const TradingCard: React.FC = () => {
  return (
    <div css={container}>
      <div css={content}>
        <img src={Product} css={imageStyle} />
        <div css={information}>
          <div css={titleContainer}>
            <div css={title}>
              아이더 바람막이 자켓
              <Vector />
            </div>
            <p css={subTitle}>#남성의류 #바람막이</p>
          </div>
          <div css={keyWordContainer}>
            <KeyWord text={"#바람막이"} />
            <KeyWord text={"#바람막이"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCard;
