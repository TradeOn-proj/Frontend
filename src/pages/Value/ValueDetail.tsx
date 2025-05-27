import {container, titleContainer, title, date, row, image
    , column, productName, keywordlist, keyword,  infoContainer
    ,tagContainer, tag, line, describe, price
} from "./VauleDetail.style"
import {Product} from "@assets/index";
import {Vote} from "@components/index";

const ValueDetail = () =>{

    return(
    <div css={container}>
     <div css={titleContainer}>
        <span css={title}>상품 상세</span>
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
        <div css={price}>이 상품은 얼마가 적당할까요?</div>
        <Vote />
    </div>
    );
};

export default ValueDetail;