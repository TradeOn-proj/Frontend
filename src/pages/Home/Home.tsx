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

const Home: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  const handleKeyWord = () => {
    navigate(`/keywordpage`);
  };

  return (
    <div css={mainContainer}>
      <img src={Banner} alt="배너 이미지" />
      <div css={buttonContainer}>
        <div css={buttonEach}onClick={()=> navigate ("/upload")}>
          <img src={Post} alt="물품 등록" css={iconStyle} />
          물품 등록
        </div>
        <div css={buttonEach}onClick={()=> navigate ("/chat")}>
          <img src={Chat} alt="채팅" css={iconStyle} />
          채팅
        </div>
        <div css={buttonEach}>
          <img src={Group} alt="공동 구매" css={iconStyle} />
          공동 구매
        </div>
        <div css={buttonEach} onClick={()=> navigate ("/value")}>
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
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
          <KeyWord text={"바람막이 "} />
          <KeyWord text={"운동화 "} />
          <KeyWord text={"가방"} />
        </div>
      </div>
      <div css={container}>
        <div css={title}>
          오늘의 상품 추천 <PlusBtn />
        </div>
        <div css={productContent}>
          {products.map((product) => (
            <Card key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
