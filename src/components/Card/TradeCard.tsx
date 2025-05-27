/** @jsxImportSource @emotion/react */
import { Product } from "@assets/index";
import {
  card, image, info, title, tags, status, reviewBtn, dot
} from "./TradeCard.style";
interface TradeCardProps {
  item: {
    id: number;
    name: string;
    tags: string[];
    status: string;
    button: string;
  };
}
const TradeCard = ({item}: TradeCardProps) => {
  return (
    <div css={card}>
      <img src={Product} css={image} />
      <div css={info}>
        <div css={title}>
          {item.name}
          <span css={status}>{item.status}</span>
          <span css={dot}>⋯</span>
        </div>
        <div css={tags}>{item.tags.join(" ")}</div>
        <button css={reviewBtn}>{item.button}</button>
      </div>
    </div>
  );
};

export default TradeCard;
