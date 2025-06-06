import {container, titleContainer, title, date, row, image
    , column, productName, keywordlist, keyword,  infoContainer
    ,line, describe, price, productPrice,tag, tagContainer
} from "./VauleDetail.style"
import {Product} from "@assets/index";
import {Vote} from "@components/index";
import {useParams} from "react-router-dom";
import useGetValuationDetail from "apis/hooks/value/useGetValuationDetail";

const ValueDetail = () =>{
 const { postId } = useParams<{ postId: string }>();
  const id = parseInt(postId ?? "0", 10);
  const { data, isLoading, error } = useGetValuationDetail(id);

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !data) return <div>에러 발생</div>;
  const imageUrl = data.image.startsWith("http")
  ? data.image
  : `${import.meta.env.VITE_BASE_URL}${data.image}`;


    return(
    <div css={container}>
     <div css={titleContainer}>
        <span css={title}>가치 평가 게시판 상세 페이지

        </span>
        <span css={date}>작성일 : {data.createdAt}</span>
     </div>
     <div css={row}>
        {/* <Product css={image} /> svg일때만 가능능 */}
        <img src={imageUrl} css={image}/>
        <div css={infoContainer}>
                <div css={column}>
                    <div css={row}>
              <span css={productName}>{data.title}</span>
               <div css={tagContainer}>
                <div css={tag}>{data.totalEvaluations}명 참여 중</div>
                </div>
            </div> 
              <div css={keywordlist}>
                <span css={keyword}>#{data.category}</span>
                {/* <span css={keyword}>#바람막이</span> */}
                </div>
                <div css={productPrice}>현재 평가 가격 : {data.averagePrice}원

                </div>
              </div>
            
            
        </div> 
        </div>
        <div css={line} />
        <div css={describe}>
            {data.description}
        </div>
        <div css={line} />
        <div css={price}>이 상품은 얼마가 적당할까요?</div>
        <Vote />
    </div>
    );
};

export default ValueDetail;