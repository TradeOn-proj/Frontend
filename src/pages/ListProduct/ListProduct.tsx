import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  mainContainer,
  productContent,
  textContainer,
  title,
} from "./ListProduct.style";
import { Card } from "@components/index";
import useGetPost from "apis/hooks/post/useGetPost";

const ListProduct: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const updatedQuery = queryParams.get("query") || "";
    setQuery(updatedQuery);
  }, [location]);

  const { data, isLoading, error } = useGetPost(undefined, 1, 9);

  return (
    <div css={mainContainer}>
      <p css={title}> 전체 상품 </p>
      <div css={textContainer}>
        방금 등록된 상품부터 순서대로 볼 수 있어요. 교환할 만한 물건을
        살펴보세요.
      </div>
      <div css={productContent}>
        {isLoading ? (
          <p>상품을 불러오는 중입니다...</p>
        ) : error ? (
          <p>상품 정보를 가져오지 못했습니다.</p>
        ) : data?.posts.length ? (
          data.posts.map((post) => (
            <Card
              key={post.id}
              post={{ ...post, thumbnail_image_url: undefined }}
            />
          ))
        ) : (
          <p>등록된 상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
