import { useEffect, useState } from "react";
import {
  mainContainer,
  productContent,
  textContainer,
  title,
} from "./ListProduct.style";
import { Card } from "@components/index";
import { getPosts } from "apis/postAPI";
import type { Post } from "apis/types/post";

const CATEGORY_LIST = ["띠부씰", "니케", "야구", "포켓몬", "게임"];

const ListProduct: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        setError(false);

        const responses = await Promise.all(
          CATEGORY_LIST.map(
            (category) => getPosts({ category, page: 1, per_page: 3 }) // per_category 제한 가능
          )
        );

        const combinedPosts = responses.flatMap((res) => res.posts);
        setPosts(combinedPosts);
      } catch (err) {
        console.error("상품 불러오기 실패", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div css={mainContainer}>
      <p css={title}>전체 상품</p>
      <div css={textContainer}>
        방금 등록된 상품부터 순서대로 볼 수 있어요. 교환할 만한 물건을
        살펴보세요.{" "}
      </div>
      <div css={productContent}>
        {loading ? (
          <p>상품을 불러오는 중입니다...</p>
        ) : error ? (
          <p>상품 정보를 가져오지 못했습니다.</p>
        ) : posts.length > 0 ? (
          posts.map((post) => <Card key={post.id} post={{ ...post }} />)
        ) : (
          <p>등록된 상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
