import {container, title, titleContainer, btnContainer, line,  paginationContainer,
  arrow, pageBtn, activePage} from "./Value.style"
import Board from "../../components/Board/Board";
import {useState} from "react";
import useGetValuationList from "apis/hooks/value/useGetValueList";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Value: React.FC = () =>{
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
   const navigate = useNavigate();
  const { data, isLoading, error } = useGetValuationList({
    page: currentPage,
    per_page: itemsPerPage,
    category: "전자기기", // 또는 선택된 카테고리
  });
   useEffect(() => {
    console.log("🔥 API 응답 데이터:", data);
  }, [data]);
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data || !Array.isArray(data.posts)) return <div>게시글 없음</div>;

    const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(data.total / itemsPerPage);
  const currentItems = data.posts;

  const handleClick = () => {
    navigate(`/valueupload`);
  };

  return (
    <div css={container}>  
        <div css={titleContainer}>
            <div css={title}>가치 평가 게시판</div>
            <div css={btnContainer} onClick={handleClick} >글 작성하기</div>
        </div>
        <div css={line}></div>
      {currentItems.map((item) => (
  <Board key={item.postId} post={item} />
))}

      <div css={paginationContainer}>
        <span css={arrow} onClick={handlePrev}>{"<"}</span>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            css={currentPage === i + 1 ? activePage : pageBtn}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span css={arrow} onClick={handleNext}>{">"}</span>
        </div>
    </div>
)
}

export default Value;