/** @jsxImportSource @emotion/react */
import { Product } from "@assets/index";
import {
  card, image, info, title, tags, status, reviewBtn, dot, titleContainer
} from "./TradeCard.style";

interface TradeCardProps {
  item: {
    id: number;
    name: string;
    tags: string[];
    status: string;
    button: string;
    image?: string;
  };
}
const TradeCard = ({item}: TradeCardProps) => {
  return (
    <div css={card}>
      <img src={item.image || Product} css={image} />
      <div css={info}>
        <div css={titleContainer}>
        <div css={title}>
          {item.name}</div>
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
