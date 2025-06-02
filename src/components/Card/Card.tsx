import { useNavigate } from "react-router-dom";
import {
  container,
  contentStyle,
  imageStyle,
  textContainer,
  titleStyle,
} from "./Card.style";
import { Product } from "@assets/index";

interface CardProps {
  post: {
    thumbnail_image_url: string | undefined;
    id: number;
    title: string;
    category: string;
    created_at?: string;
  };
}

const Card: React.FC<CardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handlePost = () => {
    navigate(`/detail`);
  };
  if (!post) return null;
  return (
    <div css={container} onClick={handlePost}>
      <img src={post.thumbnail_image_url || Product} css={imageStyle} />
      <div css={textContainer}>
        <div css={titleStyle}>{post.title}</div>
        <div css={contentStyle}>#{post.category}</div>
      </div>
    </div>
  );
};

export default Card;
