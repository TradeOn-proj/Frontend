import {container, titleContainer, title, date, row, image
    , column, productName, keywordlist, keyword, chat, infoContainer
    ,tagContainer, tag, line, describe, keywordProduct, show
} from "./Detail.style"
import {Product} from "@assets/index";
import {Card} from "@components/index";
import {useParams} from "react-router-dom";
import useGetPostDetail from "apis/hooks/item/useGetPostDetail";

const Detail = () =>{
    const { postId } = useParams<{ postId: string }>();
  const id = parseInt(postId ?? "0", 10);

  const { data, isLoading, error } = useGetPostDetail(id);

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !data) return <div>에러 발생</div>;

  const imageUrl = data.thumbnail_image_url.startsWith("http")
    ? data.thumbnail_image_url
    : `${import.meta.env.VITE_BASE_URL}${data.thumbnail_image_url}`;

    return(
    <div css={container}>
     <div css={titleContainer}>
        <span css={data.title}>상품 상세</span>
        <span css={date}>작성일 : 2025년 3월 1일</span>
     </div>
     <div css={row}>
        {/* <Product css={image} /> svg일때만 가능능 */}
        <img src={Product} css={image}/>
        <div css={infoContainer}>
            <div css={row}>
                <div css={column}>
              <span css={productName}>아이더 바람막이 자켓</span>
              <div css={keywordlist}>
                <span css={keyword}>#남성 의류</span>
                <span css={keyword}>#바람막이</span>
                </div>
              </div>
              <button css={chat}>채팅하기</button>
            </div>
            <div css={tagContainer}>
                <div css={tag}>#바람막이</div>
                <div css={tag}>#마우스</div>
            </div>
        </div> 
        </div>
        <div css={line} />
        <div css={describe}>착용 1회 한 아이더 바람막이 자켓입니다. 
            50000원에 구매하였습니다.</div>
        <div css={line} />
        <div css={show}>비슷한 키워드 상품 보기</div>
          <div css={keywordProduct}>
          {products.map((product) => (
            <Card key={product.id} />
          ))}
        </div>
    </div>
    );
};

export default Detail;