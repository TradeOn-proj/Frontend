import {container, title, titleContainer, btnContainer, line,  paginationContainer,
  arrow, pageBtn, activePage} from "./Value.style"
import Board from "../../components/Board/Board";
import {useState} from "react";

const Value: React.FC = () =>{
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
  const dummyData = Array.from({ length: 30 });
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentItems = dummyData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div css={container}>  
        <div css={titleContainer}>
            <div css={title}>가치 평가 게시판</div>
            <div css={btnContainer}>글 작성하기</div>
        </div>
        <div css={line}></div>
        {/* {Array.from({ length: 3 }).map((_, index) => (
        <Board key={index} />
      ))} */}
      {currentItems.map((_, index) => (
        <Board key={index} />
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