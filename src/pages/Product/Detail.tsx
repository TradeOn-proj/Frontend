import {container, titleContainer, title, date, row, image
    , column, productName, keywordlist, keyword, chat, infoContainer
    ,tagContainer, tag, line, describe, keywordProduct, show
} from "./Detail.style"
import {Product} from "@assets/index";
import {Card} from "@components/index";
import {useParams, useNavigate} from "react-router-dom";
import useGetPostDetail from "apis/hooks/item/useGetPostDetail";
import { postTradeProposal } from "apis/userAPI";
import {useState} from "react"

const Detail = () =>{
   const navigate = useNavigate();

    const { postId } = useParams<{ postId: string }>();
  const id = parseInt(postId ?? "0", 10);
// const [tradeId, setTradeId] = useState<number | null>(null);
  const { data, isLoading, error } = useGetPostDetail(id);

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !data) return <div>에러 발생</div>;

    const imageUrl = data.thumbnail_image_url?.startsWith("http")
    ? data.thumbnail_image_url
    : data.thumbnail_image_url
      ? `${import.meta.env.VITE_BASE_URL}${data.thumbnail_image_url}`
      : Product; // ✅ null일 경우 fallback 이미지

  const handleChatClick = async () => {
  try {
    await postTradeProposal({
      post_id: data.id,
      receiver_id: data.user_id,
      message: "이 물건 거래하고 싶습니다.",
    });
    alert("거래 제안이 전송되었습니다.");
    // setTradeId(data.trade_id); // ✅ 여기서 저장
    navigate(`/chat`);
  } catch (err) {
    console.error("거래 제안 실패", err);
    alert("거래 제안 전송에 실패했습니다.");
  }
};

    return(
    <div css={container}>
     <div css={titleContainer}>
        <span css={title}>상품 상세</span>
        <span css={date}>작성일 : {data.created_at}</span>
     </div>
     <div css={row}>
        {/* <Product css={image} /> svg일때만 가능능 */}
        <img src={imageUrl}
         css={image}/>
        <div css={infoContainer}>
            <div css={row}>
                <div css={column}>
              <span css={productName}>{data.title}</span>
              <div css={keywordlist}>
                <span css={keyword}>#{data.category}</span>
                
                </div>
                <button css={chat} onClick={handleChatClick}
                >채팅하기</button>

              </div>
              
            </div>

        </div> 
        </div>
        <div css={line} />
        <div css={describe}>{data.description}</div>
        {/* <div css={line} />
        <div css={show}>비슷한 키워드 상품 보기</div> */}
          {/* <div css={keywordProduct}>
          {products.map((product) => (
            <Card key={product.id} />
          ))}
        </div> */}
    </div>
    );
};

export default Detail;