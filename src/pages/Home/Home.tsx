import { Banner, Chat, Evaluation, Group, PlusBtn, Post } from "@assets/index";
import {
  buttonContainer,
  buttonEach,
  container,
  iconStyle,
  keyContent,
  mainContainer,
  productContent,
  title,
} from "./Home.style";
import { Card, KeyWord } from "@components/index";
import { useNavigate } from "react-router-dom";
import useGetUserCategories from "apis/hooks/user/useGetCategories";
import useGetRecommendPosts from "apis/hooks/post/useGetRecommend";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem("userId"));
  const isLoggedIn = !!userId && !isNaN(userId);

  const {
    data: categories,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useGetUserCategories(userId);

  const {
    data: recommendedPosts,
    isLoading: isPostsLoading,
    error: postsError,
  } = useGetRecommendPosts(isLoggedIn);

  const handleKeyWord = () => navigate("/keywordpage");
  const handleListProduct = () => navigate("/listproduct");

  return (
    <div css={mainContainer}>
      <img src={Banner} alt="배너 이미지" />

      <div css={buttonContainer}>
        <div css={buttonEach} onClick={() => navigate("/upload")}>
          <img src={Post} alt="물품 등록" css={iconStyle} />
          물품 등록
        </div>
        <div css={buttonEach} onClick={() => navigate("/chat")}>
          <img src={Chat} alt="채팅" css={iconStyle} />
          채팅
        </div>
        <div css={buttonEach} onClick={handleListProduct}>
          <img src={Group} alt="공동 구매" css={iconStyle} />
          상품 전체보기
        </div>
        <div css={buttonEach} onClick={() => navigate("/value")}>
          <img src={Evaluation} alt="가치 평가" css={iconStyle} />
          가치 평가
        </div>
      </div>
      <div css={container}>
        <div css={title}>
          등록된 키워드
          <PlusBtn onClick={handleKeyWord} />
        </div>
        <div css={keyContent}>
          {!isLoggedIn ? (
            <p>로그인을 해주세요.</p>
          ) : isCategoryLoading ? (
            <p>키워드를 불러오는 중입니다...</p>
          ) : categoryError ? (
            <p>키워드 정보를 가져오지 못했습니다.</p>
          ) : categories && categories.length > 0 ? (
            categories.map((keyword) => (
              <KeyWord key={keyword} text={keyword} />
            ))
          ) : (
            <p>등록된 키워드가 없습니다.</p>
          )}
        </div>
      </div>
      <div css={container}>
        <div css={title}>오늘의 상품 추천</div>
        <div css={productContent}>
          {!isLoggedIn ? (
            <p>로그인을 해주세요.</p>
          ) : isPostsLoading ? (
            <p>추천 상품을 불러오는 중입니다...</p>
          ) : postsError ? (
            <p>추천 상품을 가져오지 못했습니다.</p>
          ) : recommendedPosts && recommendedPosts.length > 0 ? (
            recommendedPosts.map((post) => (
              <Card
                key={post.id}
                post={{
                  id: post.id,
                  title: post.title,
                  category: post.category,
                  thumbnail_image_url: post.thumbnail_image_url ?? "",
                }}
              />
            ))
          ) : (
            <p>추천된 상품이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
