import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  mainContainer,
  pointStyle,
  productContent,
  textContainer,
} from "./SearchResult.style";
import { Card, SearchInput } from "@components/index";

const SearchResult: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const updatedQuery = queryParams.get("query") || "";
    setQuery(updatedQuery);
  }, [location]);

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${query}`);
    }
  };

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

  return (
    <div css={mainContainer}>
      <SearchInput query={query} setQuery={setQuery} onSearch={handleSearch} />
      <div css={textContainer}>
        <span css={pointStyle}>‘아이더 바람막이 자켓'</span>에 대한 총
        <span css={pointStyle}>9</span>
        개의 피드와 팟 검색 결과가 발견되었어요.
      </div>
      <div css={productContent}>
        {products.map((product) => (
          <Card key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
